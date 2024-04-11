import { getComments, getPost  } from "./api.js";
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
        date: new Date(comment.date).toLocaleDateString('ru-RU', { year: '2-digit', month: '2-digit', day: '2-digit' }) + ' ' + new Date(comment.date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        comment: comment.text,
        likes: comment.likes,
        isLiked: comment.isLiked,
        isEdit: false,
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

  checkingForEmptyLines();

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
  addForm.classList.remove("hidden");
  loader.textContent = '';

});

renderCommentators();

console.log("It works!");

