import { getComments} from "./api.js";
import { currentDate } from "./assistants.js";
import { renderLogin } from "./renderLogin.js";
import { setComments, renderCommentators } from "./renderCommentators.js";

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

  })
  .catch((error) => {
    if (error.message === "Сервер упал") {
      alert("Нет интернета");
    }
    if (error.message === "Failed to fetch") {
      alert("Кажется что-то пошло не так, попробуй позже..");
    };
  });
};

getCom();

renderLogin({getComments});

console.log("It works!");

