const listElement = document.getElementById ('list');

export let сommentators = [];

export const renderCommentators = (editEventListeners) => {
  const commentatorsHtml = сommentators.map((сommentator, index) => {
    return `<li class="comment" data-index="${index}">
      <div class="comment-header">
       <div>${сommentator.name}</div>
       <div>${сommentator.date}</div>
      </div>
      <div class="comment-body">
       <div class="${сommentator.isEdit ? 'display-none' : 'comment-text'}">${сommentator.comment}</div>
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

  listElement.innerHTML = commentatorsHtml;
  
  initEventListeners();
  editEventListeners();
  answerComment();
};

function delay(interval = 300) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
}   

const initEventListeners = () => {
  const likeButtonElement = document.querySelectorAll(".like-button");
  for ( const likeButtonEl of likeButtonElement) {

    const index = likeButtonEl.dataset.index;
    const counter = likeButtonEl.dataset.like;

    likeButtonEl.addEventListener("click", (event) => {
      event.stopPropagation();

      likeButtonEl.classList.add("-loading-like");

      delay(2000).then(() => {

        if (сommentators[index].isLiked === false) {

          const result = Number(counter) + 1;

          сommentators[index].likes = result;
          сommentators[index].isLiked = true;

        } else if (сommentators[index].isLiked === true) {

          const result = Number(counter) - 1;

          сommentators[index].likes = result;
          сommentators[index].isLiked = false;
        }

        renderCommentators();
      })  
    })
  }
}
renderCommentators();

function answerComment () {
      
  const commentsElements = document.querySelectorAll('.comment');

  for (const commentsEl of commentsElements) { 

    commentsEl.addEventListener('click', (e) => {
      e.stopPropagation();

      const index = commentsEl .dataset.index;
    
      textElement.value = `QUOTE_BEGIN${сommentators[index].comment}\n${сommentators[index].name}QUOTE_END`;

      renderCommentators();

    })
  }
};