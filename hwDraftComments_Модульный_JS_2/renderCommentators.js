import { addNewComment, answerComment, editEventListeners, initEventListeners } from "./eventListeners.js";
import { sanitizeHtml } from "./assistants.js";
import { token, userName } from "./api.js";
import { renderLogin } from "./renderLogin.js";

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

  let appHtml = '';

  if (token) {

   appHtml = `
   <div class="add-form" id="form">
    <input 
      type="text" 
      class="input-form"
      value=${userName} disabled id="name-input" readonly
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
   </div>`;

  } else {

   appHtml = `
   <div class="comments-block" id="comments-block"> 
     <ul id="list" class="comments">
       ${commentatorsHtml}
     </ul>
     <span class="auth-link-span" id="load-comment">Чтобы добавить комментарий,
      <a href="#" id="log">авторизуйтесь</a>
     </span>
   <div/>`;
  }

  appElement.innerHTML = commentatorsHtml + appHtml;

  if (!token) {
    const logButtonElement = document.getElementById('log');
    logButtonElement.addEventListener("click", () => {
      renderLogin({getComments});
    });
  } else {
    addNewComment (); 
  }
  
  initEventListeners();
  editEventListeners();
  answerComment();
};





