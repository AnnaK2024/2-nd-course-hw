import { answerComment, editEventListeners, initEventListeners } from "./eventListeners.js";
import { sanitizeHtml } from "./validation.js";

const listElement = document.getElementById ('list');

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
       <textarea type="textarea" class="${сommentator.isEdit ? 'add-form-text' : 'display-none'}">${сommentator.comment}</textarea>
      </div>
      <div class="comment-footer">
        <button class="${сommentator.isEdit ? 'edit-button' : 'save-button'}" data-index="${index}">Редактировать</button>
        <button onclick="event.stopPropagation()" class="${сommentator.isEdit ? 'save-button' : 'textarea'}" data-index="${index}">Сохранить</button>
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





