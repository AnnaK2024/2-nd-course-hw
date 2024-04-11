import { renderCommentators, сommentators } from "./renderCommentators.js";

const buttonElement = document.getElementById ('add-button');

export const currentDate = (date) => {
 let dateTime = new Date(date);

 const day = String(dateTime.getDate()).padStart(2, '0');
 const month = String(dateTime.getMonth()+1).padStart(2, '0');
 const year = String(dateTime.getFullYear() - 2000);
 const minutes = String(dateTime.getMinutes()).padStart(2, '0');
 const hours = String(dateTime.getHours()).padStart(2, '0');

 return `${day}.${month}.${year} ${hours}:${minutes}`;
};

export function delay(interval = 300) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, interval);
    });
};

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
  



