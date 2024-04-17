import { getComments} from "./api.js";
import { currentDate } from "./assistants.js";
import { renderLogin } from "./renderLogin.js";
import { setComments, renderCommentators } from "./renderCommentators.js";
import { answerComment, initEventListeners } from "./eventListeners.js";

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
      };
    });

   setComments(appComments);
   renderCommentators();
   loader.textContent = '';
   addForm.classList.remove("hidden");
   preloader.classList.add('preloader-hidden');

  })

};

getCom();

renderLogin({getComments});

initEventListeners ({comments}, {renderCommentators});

answerComment (comments);
addEventListener ();

console.log("It works!");

 