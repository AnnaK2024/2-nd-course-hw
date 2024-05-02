import { addNewComment, answerComment, editEventListeners, initEventListeners } from "./eventListeners.js";
import { sanitizeHtml } from "./assistants.js";
import { getComments, token, userName } from "./api.js";
import { renderLogin } from "./renderForm.js";

export let сommentators = [];

export function setComments (newComments) {
  сommentators = newComments;
};

// отрисовка списка комментариев
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

  let appHtml = ''; // отображение формы в зависимости от наличия токена

  // если токен есть
  if (token) {

   // форма добавления нового комментария 
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

   // ссылка на авторизацию
   appHtml = `
   <div class="comments-block" id="comments-block"> 
     <ul id="list" class="comments">
     </ul>
   <div/>
   <div class="auth-info" id="load-comment">Чтобы добавить комментарий,
    <a class="auth-link" href="#" id="log">авторизуйтесь</a>
   </div>`;
  }

  appElement.innerHTML = commentatorsHtml + appHtml; // если есть токен - список комментариев + appHtml (либо форма добавления комментария, либо поле авторизации)

  // токена нет
  if (!token) {
    const logButtonElement = document.getElementById('log'); // переход по ссылке авторизации
    logButtonElement.addEventListener("click", () => {
      renderLogin(getComments);
    });
  } else {
    addNewComment (); // добавление нового комментария
  };
  
  initEventListeners();
  editEventListeners();
  answerComment();
};





