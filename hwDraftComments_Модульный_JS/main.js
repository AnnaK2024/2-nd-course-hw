import { getComments, getPost  } from "./api.js";
import { сommentators, renderCommentators } from "./renderCommentators.js";


window.onload = function() {
  let preloader = document.getElementById('preloader');
};

const nameElement = document.getElementById ('name-input');
const textElement = document.getElementById ('text-input');
const buttonElement = document.getElementById ('add-button');
const addForm = document.getElementById("form");
const loader = document.querySelector(".loader");


const getCom = () => {

  getComments ().then((responseData) => {
    const appComments = responseData.comments.map((comment) => {
      return {
        name : comment.author.name,
        date : new Date(comment.date).toLocaleDateString('ru-RU', { year: '2-digit', month: '2-digit', day: '2-digit' }) + ' ' + new Date(comment.date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        comment : comment.text,
        likes : comment.likes,
        isLiked: comment.isLiked,
        forceError: true,
      };
    });

    сommentators = appComments;
    renderCommentators();
    loader.textContent = '';
    addForm.classList.remove("hidden");
    preloader.classList.add('preloader-hidden');
      
  })
};

getCom();

const editEventListeners = () => { 
  const editButtonElements = document.querySelectorAll(".edit-button"); 
  for ( const editButtonEl of editButtonElements) { 
    editButtonEl.addEventListener("click", (e) => { 
      e.stopPropagation();
      const index = editButtonEl.dataset.index;
      сommentators[index].isEdit = !сommentators[index].isEdit;
      renderCommentators();
    });
  }

  const saveButtons = document.querySelectorAll(".save-button");
  for (const saveButton of saveButtons) {
    saveButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const index = saveButton.dataset.index;
      сommentators[index].isEdit = !сommentators[index].isEdit;
      сommentators[index].comment = saveButton.closest('.comment').querySelector('textarea').value
      renderCommentators();
    });
  }
}

buttonElement.addEventListener("click", () => {
  nameElement.classList.remove("error");
  textElement.classList.remove("error");
  
  if (nameElement.value.trim() === "") {
    nameElement.classList.add("error");
    return;
  }  
  if (textElement.value.trim() === "") {
    textElement.classList.add("error");
    return;
  };

 const currentDate = new Date();
  function formatTime(currentDate){

   const date = currentDate.getDate().toString().padStart(2, "0");
   const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
   const year = currentDate.getFullYear().toString().substr(2,2);

   const h = currentDate.getHours().toString().padStart(2, "0");
   const m = currentDate.getMinutes().toString().padStart(2, "0");

   return `${date}.${month}.${year} ${h}:${m}`
  }; 

  const sanitizeHtml = (htmlString) => {
    return htmlString
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("QUOTE_BEGIN", "<div class='quote'>")
    .replaceAll("QUOTE_END", "</div>")
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
  })
  console.warn(error);
  loader.textContent = '';
  addForm.classList.remove("hidden");
});

renderCommentators();

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

console.log("It works!");

