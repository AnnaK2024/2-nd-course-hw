import {sanitizeHtml} from "./sanitizeHtml.js";
import { deleteTodo, postTodo, userName} from "./api.js";


export const renderTasks = (tasks, fetchAndRenderTasks) => {
  const appElement = document.getElementById("app");
    const tasksHtml = tasks
      .map((task) => {
        return `
        <li class="task">
          <p class="task-text">
            ${sanitizeHtml(task.text)}
            <button data-id="${task.id}"
            class="button delete-button">Удалить</button>
          </p>
        </li>`;
      })
      .join("");

      const appHtml = `
      <h1>Список задач</h1>
      <ul class="tasks" id="${tasksHtml}"></ul>
      <br />
      <!— Должна появиться после входа —>
      <div class="form">
        <p class="form-name">Имя пользователя: = ${userName}</p>
        <h3 class="form-title">Форма добавления</h3>
        <div class="form-row">
          Что нужно сделать:
          <input
            type="text"
            id="text-input"
            class="input"
            placeholder="Выпить кофе"
          />
        </div>
        <br />
        <button class="button" id="add-button">Обновить</button>
      </div>`;

    appElement.innerHTML = appHtml;
    const deleteButtons = document.querySelectorAll(".delete-button");

    for (const deleteButton of deleteButtons) {
      deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();

        const id = deleteButton.dataset.id;

        deleteTodo ( {id}).then(() => {
            fetchAndRenderTasks();
          });
      });
    }

    const buttonElement = document.getElementById("add-button");
    const textInputElement = document.getElementById("text-input");

    buttonElement.addEventListener("click", () => {
      if (textInputElement.value === "") {
        return;
      }
    
      buttonElement.disabled = true;
      buttonElement.textContent = "Элемент добавлятся...";
    
      postTodo ({
        text: textInputElement.value,
      })
      .then(() => {
        return fetchAndRenderTasks();
      })
      .then(() => {
        buttonElement.disabled = false;
        buttonElement.textContent = "Добавить";
        textInputElement.value = "";
      });
    
      renderTasks(tasks, fetchAndRenderTasks);
      
    });
};
