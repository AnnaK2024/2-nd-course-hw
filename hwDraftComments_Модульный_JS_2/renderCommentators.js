import { answerComment, editEventListeners, initEventListeners } from "./eventListeners.js";
import { sanitizeHtml } from "./assistants.js";

export let сommentators = [];

export function setComments (newComments) {
  сommentators = newComments;
};

export const renderCommentators = () => {
  const appElement = document.getElementById("app");
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

  const appHtml = `
  <ul id="list" class="comments">${commentatorsHtml}
    <!-- Список ренедрится из JS -->
  </ul>
 <div class="add-form" id="form">
  <input 
    type="text" 
    class="input-form"
    placeholder="Введите ваше имя"
    id="name-input"
  />
  <textarea 
    type="textarea" 
    class="text-area-form"
    placeholder="Введите ваш коментарий"
    rows="4"
    id="text-input"
  ></textarea>
  <div class="add-form-row">
    <button class="add-form-button" id="add-button">Написать</button>
  </div>
  <div>
    <button class="button-delete" id="deleteComment">Удалить последний комментарий</button>
  </div>
 </div>
 `;

  appElement.innerHTML = appHtml;
  
  initEventListeners();
  editEventListeners();
  answerComment();
};





