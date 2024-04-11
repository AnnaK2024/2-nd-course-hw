import { getComments, getPost  } from "./api.js";
import { currentDate } from "./assistants.js";
import { setComments, renderCommentators } from "./renderCommentators.js";
import { checkingForEmptyLines } from "./validation.js";

const nameElement = document.getElementById ('name-input');
const textElement = document.getElementById ('text-input');
const buttonElement = document.getElementById ('add-button');
const addForm = document.getElementById("form");
const loader = document.querySelector(".loader");


function getCom() {
  getComments().then((responseData) => {
    let appComments = responseData.comments.map((comment) => {
      return {
        name: comment.author.name,
        date: currentDate(comment.date),
        comment: comment.text,
        likes: comment.likes,
        isLiked: comment.isLiked,
        forceError: true,
      };
    });

   setComments(appComments);
   renderCommentators();
   loader.textContent = '';
   addForm.classList.remove("hidden");
   preloader.classList.add('preloader-hidden');

  });
}

getCom();

buttonElement.addEventListener("click", () => {

  if (checkingForEmptyLines() === false) {
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
    
  }).finally(() => loader.textContent = '');

});

renderCommentators();

console.log("It works!");

