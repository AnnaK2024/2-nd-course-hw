const buttonElement = document.getElementById ('add-button');

export const currentDate = new Date();
function formatTime(currentDate){

 const date = currentDate.getDate().toString().padStart(2, "0");
 const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
 const year = currentDate.getFullYear().toString().substr(2,2);

 const h = currentDate.getHours().toString().padStart(2, "0");
 const m = currentDate.getMinutes().toString().padStart(2, "0");

 return `${date}.${month}.${year} ${h}:${m}`
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



