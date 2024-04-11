import { delay } from "./assistants.js";
import { sanitizeHtml } from "./validation.js";

const listElement = document.getElementById ('list');
const textElement = document.getElementById ('text-input');


export let сommentators = [];

export function setComments (newComments) {
  сommentators = newComments;
};

export const renderCommentators = () => {
  const commentatorsHtml = сommentators.map((сommentator, index) => {
    return `<li class="comment" data-index="${index}">
      <div class="comment-header">
       <div>${sanitizeHtml(сommentator.name)}</div>
       <div>${сommentator.date}</div>
      </div>
      <div class="comment-body">
       <div class="${сommentator.isEdit ? 'display-none' : 'comment-text'}">${sanitizeHtml(сommentator.comment)}</div>
       <textarea type="textarea" class="${сommentator.isEdit ? 'add-form-text' : 'display-none'}" >${сommentator.comment}</textarea>
      </div>
      <div class="comment-footer">
        <button class="${сommentator.isEdit ? 'edit-button' : 'save-button'}" data-index="${index}">Редактировать</button>
        <button class="${сommentator.isEdit ? 'save-button' : 'textarea'}" data-index="${index}">Сохранить</button>
      <div class="likes">
        <span class="likes-counter">${сommentator.likes}</span>
        <button data-like="${сommentator.likes}" data-index="${index}" class="like-button ${сommentators[index].isLiked ?'-active-like' : 'like-button'}"></button>
      </div>
    </div>
    </li>`;
  })
  .join("");

  listElement.innerHTML = commentatorsHtml;
  
  initEventListeners();
  editEventListeners();
  answerComment();
};

let initEventListeners = () => {
  const likeButtonElement = document.querySelectorAll(".like-button");
  for ( const likeButtonEl of likeButtonElement) {

    const index = likeButtonEl.dataset.index;
    const counter = likeButtonEl.dataset.like;

    likeButtonEl.addEventListener("click", (e) => {
      e.stopPropagation();

      likeButtonEl.classList.add("-loading-like");
      likeButtonEl.disabled = true;

      delay(2000).then(() => {

        if (сommentators[index].isLiked === false) {

          const result = Number(counter) + 1;

          сommentators[index].likes = result;
          сommentators[index].isLiked = true;

        } else if (сommentators[index].isLiked === true) {

          const result = Number(counter) - 1;

          сommentators[index].likes = result;
          сommentators[index].isLiked = false;
        }

        renderCommentators();
      }) 
    })
  }
}
renderCommentators();

function editEventListeners () {
  const editButtonElements = document.querySelectorAll(".edit-button"); 
  for ( const editButtonEl of editButtonElements) { 
    editButtonEl.addEventListener("click", (e) => { 
      e.stopPropagation();
      const index = editButtonEl.dataset.index;
      сommentators[index].isEdit = !сommentators[index].isEdit;
      renderCommentators();
    });
  }

  const saveButtons = document.querySelectorAll(".save-button");
  for (const saveButton of saveButtons) {
    saveButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const index = saveButton.dataset.index;
      сommentators[index].isEdit = !сommentators[index].isEdit;
      сommentators[index].comment = saveButton.closest('.comment').querySelector('textarea').value
      renderCommentators();
    });
  }
};

function answerComment () {
      
  const commentsElements = document.querySelectorAll('.comment');

  for (const commentsEl of commentsElements) { 

    commentsEl.addEventListener('click', (e) => {
      e.stopPropagation();

      if ( isEdit === true) {

       const index = commentsEl .dataset.index;
    
       textElement.value = `QUOTE_BEGIN${сommentators[index].comment}\n${сommentators[index].name}QUOTE_END`;

       renderCommentators();
      }
    })
  }
};




