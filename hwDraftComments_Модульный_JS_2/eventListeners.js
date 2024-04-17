import { delay } from "./assistants.js";
import { renderCommentators, сommentators } from "./renderCommentators.js";

const buttonElement = document.getElementById ('add-button');
const textElement = document.getElementById ('text-input');

export let initEventListeners = () => {
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
  
export function editEventListeners () {
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
  
export function answerComment () {
        
    const commentsElements = document.querySelectorAll('.comment');
  
    for (const commentsEl of commentsElements) { 
  
      commentsEl.addEventListener('click', (event) => {
        event.stopPropagation();
  
         const index = commentsEl .dataset.index;
      
         textElement.value = `QUOTE_BEGIN${сommentators[index].comment}\n${сommentators[index].name}QUOTE_END`;
  
         renderCommentators();
      })
    };
};

buttonElement.addEventListener("click", () => {

  nameElement.classList.remove("error");
  textElement.classList.remove("error");
  
  if (nameElement.value.trim() === "") {
    nameElement.classList.add("error");
    return;
  }  
  if (textElement.value.trim() === "") {
    textElement.classList.add("error");
    return;
  };

  addForm.classList.add("hidden");
  loader.textContent = 'Комментарий добавляется .....';

  getPost ({
    name: nameElement.value,
    text: textElement.value,
  })
  .then(() => {
    nameElement.value = "";
    textElement.value = "";
    return getCom();
  })
  .catch((error) => {
    if (error.message === "Сервер упал") {
      alert("Нет интернета");
    }
    if (error.message === "Вводимые данные слишком короткие") {
      alert("Имя или текст менее трех символов");
    }
    if (error.message === "Failed to fetch") {
      alert("Кажется что-то пошло не так, попробуй позже..");
    };
  })
  .finally(() => loader.textContent = '');
});

renderCommentators();

const formElement = document.getElementById ('form');
formElement.addEventListener('keyup', keyEvent);
function keyEvent(e) {
    if (e.code === 'Enter') {
      buttonElement.dispatchEvent(new Event('click'));
    }
};
  
const removeButton = document.getElementById("deleteComment");
removeButton.addEventListener("click", () => {
   сommentators.pop();
   renderCommentators();
});