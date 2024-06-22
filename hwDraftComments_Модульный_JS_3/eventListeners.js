import { format } from 'date-fns'
import { getComments, getPost } from './api.js'
import { delay } from './assistants.js'
import {
    renderCommentators,
    setComments,
    сommentators,
} from './renderCommentators.js'

// добавление нового комментария
export function addNewComment() {
    const buttonElement = document.getElementById('add-button')
    const textElement = document.getElementById('text-input')
    const nameElement = document.getElementById('name-input')
    const addForm = document.getElementById('form')
    const loader = document.querySelector('#preloader')

    buttonElement.addEventListener('click', () => {
        nameElement.classList.remove('error')
        textElement.classList.remove('error')

        if (nameElement.value.trim() === '') {
            nameElement.classList.add('error')
            return
        }
        if (textElement.value.trim() === '') {
            textElement.classList.add('error')
            return
        }

        addForm.classList.add('hidden')
        loader.textContent = 'Комментарий добавляется .....'

        getPost({
            name: nameElement.value,
            text: textElement.value,
        })
            .then(() => {
                return getComments().then((responseData) => {
                    let appComments = responseData.comments.map((comment) => {
                        return {
                            name: comment.author.name,
                            date: format(
                                new Date(comment.date),
                                'yyyy-MM-dd HH:mm:ss',
                            ),
                            comment: comment.text,
                            likes: comment.likes,
                            isLiked: comment.isLiked,
                        }
                    })
                    setComments(appComments)
                    renderCommentators()
                })
            })
            .catch((error) => {
                if (error.message === 'Сервер упал') {
                    alert('Нет интернета')
                }
                if (error.message === 'Вводимые данные слишком короткие') {
                    alert('Имя или текст менее трех символов')
                }
                if (error.message === 'Failed to fetch') {
                    alert('Кажется что-то пошло не так, попробуй позже..')
                }
            })
            .finally(() => {
                addForm.classList.remove('hidden')
                loader.textContent = ''
            })
    })
}

//Лайки
export let initEventListeners = () => {
    const likeButtonElement = document.querySelectorAll('.like-button')
    for (const likeButtonEl of likeButtonElement) {
        const index = likeButtonEl.dataset.index
        const counter = likeButtonEl.dataset.like

        likeButtonEl.addEventListener('click', (e) => {
            e.stopPropagation()

            likeButtonEl.classList.add('-loading-like')
            likeButtonEl.disabled = true

            delay(2000).then(() => {
                if (сommentators[index].isLiked === false) {
                    const result = Number(counter) + 1

                    сommentators[index].likes = result
                    сommentators[index].isLiked = true
                } else if (сommentators[index].isLiked === true) {
                    const result = Number(counter) - 1

                    сommentators[index].likes = result
                    сommentators[index].isLiked = false
                }

                renderCommentators()
            })
        })
    }
}

// редактирование комментария
export function editEventListeners() {
    const editButtonElements = document.querySelectorAll('.edit-button')
    for (const editButtonEl of editButtonElements) {
        editButtonEl.addEventListener('click', (e) => {
            e.stopPropagation()
            const index = editButtonEl.dataset.index
            сommentators[index].isEdit = !сommentators[index].isEdit
            renderCommentators()
        })
    }

    const saveButtons = document.querySelectorAll('.save-button')
    for (const saveButton of saveButtons) {
        saveButton.addEventListener('click', (e) => {
            e.stopPropagation()
            const index = saveButton.dataset.index
            сommentators[index].isEdit = !сommentators[index].isEdit
            сommentators[index].comment = saveButton
                .closest('.comment')
                .querySelector('textarea').value
            renderCommentators()
        })
    }
}

//ответ на комментирий
export function answerComment() {
    const commentsElements = document.querySelectorAll('.comment')
    const textElement = document.getElementById('text-input')

    for (const commentsEl of commentsElements) {
        commentsEl.addEventListener('click', (event) => {
            event.stopPropagation()

            const index = commentsEl.dataset.index

            if (сommentators[index].isEdit) return

            textElement.value = `QUOTE_BEGIN${сommentators[index].comment}\n${сommentators[index].name}QUOTE_END`

            renderCommentators()
        })
    }
}

// добавление нового комментария по нажатию на Enter
const formElement = document.getElementById('form')
if (formElement) {
    formElement.addEventListener('keyup', keyEvent)
    function keyEvent(e) {
        if (e.code === 'Enter') {
            buttonElement.dispatchEvent(new Event('click'))
        }
    }
}

// удаление последнего комментария
const removeButton = document.getElementById('deleteComment')
if (removeButton) {
    removeButton.addEventListener('click', () => {
        сommentators.pop()
        renderCommentators()
    })
}
