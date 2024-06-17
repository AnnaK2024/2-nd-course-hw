/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
    // webpackBootstrap
    /******/ "use strict";
    /******/ var __webpack_modules__ = {
        /***/ "./api.js":
            /*!****************!*\
  !*** ./api.js ***!
  \****************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   getLogin: () => (/* binding */ getLogin),\n/* harmony export */   getPost: () => (/* binding */ getPost),\n/* harmony export */   getRegistr: () => (/* binding */ getRegistr),\n/* harmony export */   setName: () => (/* binding */ setName),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   token: () => (/* binding */ token),\n/* harmony export */   userName: () => (/* binding */ userName)\n/* harmony export */ });\nconst host = "https://wedev-api.sky.pro/api/v2/:anna-kalina/comments";\r\nconst userLog = "https://wedev-api.sky.pro/api/user/login";\r\nconst userReg = \'https://wedev-api.sky.pro/api/user\';\r\n\r\nlet token = "";\r\nconst setToken = (newToken) => {\r\n  token = newToken;\r\n};\r\n\r\nlet userName = "";\r\nconst setName = (newName) => {\r\n  userName = newName;\r\n};\r\n\r\nfunction getComments () {\r\n return fetch(host, {\r\n    method: "GET" \r\n })\r\n  .then((response) => {\r\n    if (response.status === 500) {\r\n     throw new Error("Сервер упал");\r\n    }\r\n    if (response.status === "Failed to fetch") {\r\n     throw new Error("Кажется что-то пошло не так, попробуй позже..");\r\n    }\r\n     return response.json();\r\n  })\r\n  .catch((error) => {\r\n    if (error.message === "Сервер упал") {\r\n      alert("Нет интернета");\r\n    }\r\n    if (error.message === "Failed to fetch") {\r\n      alert("Кажется что-то пошло не так, попробуй позже..");\r\n    };\r\n  });\r\n};\r\n\r\nfunction getPost ({name, text}) {\r\n  return fetch(host, {\r\n    method: "POST",\r\n     body: JSON.stringify ({\r\n       name: name,\r\n       text: text,\r\n     }),\r\n     headers: {\r\n      Authorization: `Bearer ${token}`,\r\n     }\r\n  })\r\n  .then((response) => {\r\n    if (response.status === 500) {\r\n      throw new Error("Сервер упал");\r\n    }\r\n    if (response.status === 400) {\r\n      throw new Error("Вводимые данные слишком короткие");\r\n    }  \r\n    return response.json();\r\n  })\r\n};\r\n\r\nfunction getLogin ({login, password}) {\r\n  return fetch(userLog, {\r\n    method: "POST",\r\n    body: JSON.stringify ({\r\n      login,\r\n      password,\r\n    }),\r\n  })\r\n  .then((response) => {\r\n    return response.json();\r\n  })\r\n};\r\n\r\nfunction getRegistr({name, login, password}) {\r\n  return fetch(userReg, {\r\n    method: "POST",\r\n    body: JSON.stringify({\r\n      name: name,\r\n      login: login,\r\n      password: password,\r\n    }),\r\n  })\r\n  .then((response) => {\r\n    return response.json();\r\n  })\r\n};\r\n\r\n// export function deleteComment({ id }) {\r\n//   return fetch(userReg + id, {\r\n//      method: "DELETE",\r\n//   }).then((response) => {\r\n//      return response.json();\r\n//   });\r\n// };\r\n\n\n//# sourceURL=webpack:///./api.js?',
                );

                /***/
            },

        /***/ "./assistants.js":
            /*!***********************!*\
  !*** ./assistants.js ***!
  \***********************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentDate: () => (/* binding */ currentDate),\n/* harmony export */   delay: () => (/* binding */ delay),\n/* harmony export */   sanitizeHtml: () => (/* binding */ sanitizeHtml)\n/* harmony export */ });\nconst currentDate = (date) => {\r\n  \r\n let dateTime = new Date(date);\r\n\r\n const day = String(dateTime.getDate()).padStart(2, \'0\');\r\n const month = String(dateTime.getMonth()+1).padStart(2, \'0\');\r\n const year = String(dateTime.getFullYear() - 2000);\r\n const minutes = String(dateTime.getMinutes()).padStart(2, \'0\');\r\n const hours = String(dateTime.getHours()).padStart(2, \'0\');\r\n\r\n return `${day}.${month}.${year} ${hours}:${minutes}`;\r\n};\r\n\r\n// window.onload = function() {\r\n//   let preloader = document.getElementById(\'preloader\');\r\n// };\r\n\r\n// <div class="loader"></div>\r\n    \r\nfunction delay(interval = 300) {\r\n    return new Promise((resolve) => {\r\n      setTimeout(() => {\r\n        resolve();\r\n      }, interval);\r\n    });\r\n};\r\n\r\nconst sanitizeHtml = (htmlString) => {\r\n  return htmlString\r\n  .replaceAll("&", "&amp;")\r\n  .replaceAll("<", "&lt;")\r\n  .replaceAll(">", "&gt;")\r\n  .replaceAll(\'"\', "&quot;")\r\n  .replaceAll("QUOTE_BEGIN", "<div class=\'quote\'>")\r\n  .replaceAll("QUOTE_END", "</div>")\r\n};\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./assistants.js?',
                );

                /***/
            },

        /***/ "./eventListeners.js":
            /*!***************************!*\
  !*** ./eventListeners.js ***!
  \***************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewComment: () => (/* binding */ addNewComment),\n/* harmony export */   answerComment: () => (/* binding */ answerComment),\n/* harmony export */   editEventListeners: () => (/* binding */ editEventListeners),\n/* harmony export */   initEventListeners: () => (/* binding */ initEventListeners)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./api.js");\n/* harmony import */ var _assistants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assistants.js */ "./assistants.js");\n/* harmony import */ var _renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderCommentators.js */ "./renderCommentators.js");\n\r\n\r\n\r\n\r\n// добавление нового комментария\r\nfunction addNewComment () { \r\n\r\n  const buttonElement = document.getElementById (\'add-button\');\r\n  const textElement = document.getElementById (\'text-input\');\r\n  const nameElement = document.getElementById (\'name-input\');\r\n  const addForm = document.getElementById(\'form\');\r\n  const loader = document.querySelector("#preloader");\r\n\r\n  buttonElement.addEventListener("click", () => {\r\n\r\n   nameElement.classList.remove("error");\r\n   textElement.classList.remove("error");\r\n  \r\n   if (nameElement.value.trim() === "") {\r\n     nameElement.classList.add("error");\r\n     return;\r\n   }  \r\n   if (textElement.value.trim() === "") {\r\n     textElement.classList.add("error");\r\n     return;\r\n   };\r\n\r\n   addForm.classList.add("hidden");\r\n   loader.textContent = \'Комментарий добавляется .....\';\r\n\r\n   (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPost) ({\r\n     name: nameElement.value,\r\n     text: textElement.value,\r\n   })\r\n   .then(() => {\r\n     return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)().then((responseData) => {\r\n      let appComments = responseData.comments.map((comment) => {\r\n        return {\r\n          name: comment.author.name,\r\n          date: (0,_assistants_js__WEBPACK_IMPORTED_MODULE_1__.currentDate)(comment.date),\r\n          comment: comment.text,\r\n          likes: comment.likes,\r\n          isLiked: comment.isLiked,\r\n        };\r\n      });\r\n      (0,_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__.setComments)(appComments);\r\n      (0,_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__.renderCommentators)();\r\n     })\r\n    })\r\n   .catch((error) => {\r\n     if (error.message === "Сервер упал") {\r\n       alert("Нет интернета");\r\n     }\r\n     if (error.message === "Вводимые данные слишком короткие") {\r\n       alert("Имя или текст менее трех символов");\r\n     }\r\n     if (error.message === "Failed to fetch") {\r\n       alert("Кажется что-то пошло не так, попробуй позже..");\r\n     }\r\n   })  \r\n   .finally (() => {\r\n      addForm.classList.remove("hidden");\r\n      loader.textContent = "";\r\n    });\r\n  });\r\n};\r\n\r\n//Лайки\r\nlet initEventListeners = () => {\r\n const likeButtonElement = document.querySelectorAll(".like-button");\r\n    for ( const likeButtonEl of likeButtonElement) {\r\n  \r\n      const index = likeButtonEl.dataset.index;\r\n      const counter = likeButtonEl.dataset.like;\r\n  \r\n      likeButtonEl.addEventListener("click", (e) => {\r\n        e.stopPropagation();\r\n  \r\n        likeButtonEl.classList.add("-loading-like");\r\n        likeButtonEl.disabled = true;\r\n  \r\n        (0,_assistants_js__WEBPACK_IMPORTED_MODULE_1__.delay)(2000).then(() => {\r\n  \r\n          if (_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].isLiked === false) {\r\n  \r\n            const result = Number(counter) + 1;\r\n  \r\n            _renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].likes = result;\r\n            _renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].isLiked = true;\r\n  \r\n          } else if (_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].isLiked === true) {\r\n  \r\n            const result = Number(counter) - 1;\r\n  \r\n            _renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].likes = result;\r\n            _renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].isLiked = false;\r\n          }\r\n  \r\n          (0,_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__.renderCommentators)();\r\n        }) \r\n      })\r\n   }\r\n}\r\n\r\n// редактирование комментария  \r\nfunction editEventListeners () {\r\n    const editButtonElements = document.querySelectorAll(".edit-button"); \r\n    for ( const editButtonEl of editButtonElements) { \r\n      editButtonEl.addEventListener("click", (e) => { \r\n        e.stopPropagation();\r\n        const index = editButtonEl.dataset.index;\r\n        _renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].isEdit = !_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].isEdit;\r\n        (0,_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__.renderCommentators)();\r\n      });\r\n    }\r\n  \r\n    const saveButtons = document.querySelectorAll(".save-button");\r\n    for (const saveButton of saveButtons) {\r\n      saveButton.addEventListener("click", (e) => {\r\n        e.stopPropagation();\r\n        const index = saveButton.dataset.index;\r\n        _renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].isEdit = !_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].isEdit;\r\n        _renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].comment = saveButton.closest(\'.comment\').querySelector(\'textarea\').value\r\n        ;(0,_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__.renderCommentators)();\r\n      });\r\n    }\r\n};\r\n\r\n//ответ на комментирий  \r\nfunction answerComment () {\r\n    const commentsElements = document.querySelectorAll(\'.comment\');\r\n    const textElement = document.getElementById (\'text-input\');\r\n    \r\n    for (const commentsEl of commentsElements) { \r\n  \r\n      commentsEl.addEventListener(\'click\', (event) => {\r\n        event.stopPropagation();\r\n  \r\n         const index = commentsEl .dataset.index;\r\n\r\n         if (_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].isEdit) return;\r\n      \r\n         textElement.value = `QUOTE_BEGIN${_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].comment}\\n${_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"][index].name}QUOTE_END`;\r\n  \r\n         (0,_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__.renderCommentators)();\r\n      })\r\n    };\r\n};\r\n\r\n\r\n// добавление нового комментария по нажатию на Enter\r\nconst formElement = document.getElementById (\'form\');\r\nif (formElement) {\r\n  formElement.addEventListener(\'keyup\', keyEvent);\r\n  function keyEvent(e) {\r\n    if (e.code === \'Enter\') {\r\n      buttonElement.dispatchEvent(new Event(\'click\'));\r\n    }\r\n  }\r\n};\r\n\r\n// удаление последнего комментария  \r\nconst removeButton = document.getElementById("deleteComment");\r\nif (removeButton) {\r\n  removeButton.addEventListener("click", () => {\r\n    _renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__["сommentators"].pop();\r\n    (0,_renderCommentators_js__WEBPACK_IMPORTED_MODULE_2__.renderCommentators)();\r\n });\r\n};\r\n\n\n//# sourceURL=webpack:///./eventListeners.js?',
                );

                /***/
            },

        /***/ "./main.js":
            /*!*****************!*\
  !*** ./main.js ***!
  \*****************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./api.js");\n/* harmony import */ var _assistants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assistants.js */ "./assistants.js");\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners.js */ "./eventListeners.js");\n/* harmony import */ var _renderCommentators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderCommentators.js */ "./renderCommentators.js");\n/* harmony import */ var _renderForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderForm.js */ "./renderForm.js");\n\r\n\r\n\r\n\r\n\r\n\r\n// форма добавления нового комментария\r\nfunction getCom() {\r\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)().then((responseData) => {\r\n    let appComments = responseData.comments.map((comment) => {\r\n      return {\r\n        name: comment.author.name,\r\n        date: (0,_assistants_js__WEBPACK_IMPORTED_MODULE_1__.currentDate)(comment.date),\r\n        comment: comment.text,\r\n        likes: comment.likes,\r\n        isLiked: comment.isLiked,\r\n      };\r\n    });\r\n\r\n   (0,_renderCommentators_js__WEBPACK_IMPORTED_MODULE_3__.setComments)(appComments);\r\n   (0,_renderCommentators_js__WEBPACK_IMPORTED_MODULE_3__.renderCommentators)({сommentators: _renderCommentators_js__WEBPACK_IMPORTED_MODULE_3__["сommentators"], initEventListeners: _eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.initEventListeners, answerComment: _eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.answerComment, delay: _assistants_js__WEBPACK_IMPORTED_MODULE_1__.delay});\r\n   preloader.classList.add(\'preloader-hidden\');\r\n  })\r\n};\r\ngetCom();\r\n\r\n(0,_renderForm_js__WEBPACK_IMPORTED_MODULE_4__.renderLogin)({getComments: _api_js__WEBPACK_IMPORTED_MODULE_0__.getComments});\r\n\r\n(0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.initEventListeners) ({сommentators: _renderCommentators_js__WEBPACK_IMPORTED_MODULE_3__["сommentators"]}, {renderCommentators: _renderCommentators_js__WEBPACK_IMPORTED_MODULE_3__.renderCommentators});\r\n\r\n(0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.answerComment) (_renderCommentators_js__WEBPACK_IMPORTED_MODULE_3__["сommentators"]);\r\n\r\nconsole.log("It works!");\r\n\r\n \n\n//# sourceURL=webpack:///./main.js?',
                );

                /***/
            },

        /***/ "./renderCommentators.js":
            /*!*******************************!*\
  !*** ./renderCommentators.js ***!
  \*******************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCommentators: () => (/* binding */ renderCommentators),\n/* harmony export */   setComments: () => (/* binding */ setComments),\n/* harmony export */   "сommentators": () => (/* binding */ сommentators)\n/* harmony export */ });\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners.js */ "./eventListeners.js");\n/* harmony import */ var _assistants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assistants.js */ "./assistants.js");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ "./api.js");\n/* harmony import */ var _renderForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderForm.js */ "./renderForm.js");\n\r\n\r\n\r\n\r\n\r\nlet сommentators = [];\r\n\r\nfunction setComments (newComments) {\r\n  сommentators = newComments;\r\n};\r\n\r\n// отрисовка списка комментариев\r\nconst renderCommentators = () => {\r\n  const appElement = document.getElementById("app");\r\n  const commentatorsHtml = сommentators.map((сommentator, index) => {\r\n    return `<li class="comment" data-index="${index}">\r\n      <div class="comment-header">\r\n       <div>${(0,_assistants_js__WEBPACK_IMPORTED_MODULE_1__.sanitizeHtml)(сommentator.name)}</div>\r\n       <div>${сommentator.date}</div>\r\n      </div>\r\n      <div class="comment-body">\r\n       <div class="${сommentator.isEdit ? \'display-none\' : \'comment-text\'}">${(0,_assistants_js__WEBPACK_IMPORTED_MODULE_1__.sanitizeHtml)(сommentator.comment)}</div>\r\n       <textarea type="textarea" class="${сommentator.isEdit ? \'add-form-text\' : \'display-none\'}" >${сommentator.comment}</textarea>\r\n      </div>\r\n      <div class="comment-footer">\r\n        <button class="${сommentator.isEdit ? \'edit-button\' : \'save-button\'}" data-index="${index}">Редактировать</button>\r\n        <button class="${сommentator.isEdit ? \'save-button\' : \'textarea\'}" data-index="${index}">Сохранить</button>\r\n      <div class="likes">\r\n        <span class="likes-counter">${сommentator.likes}</span>\r\n        <button data-like="${сommentator.likes}" data-index="${index}" class="like-button ${сommentators[index].isLiked ?\'-active-like\' : \'like-button\'}"></button>\r\n      </div>\r\n    </div>\r\n    </li>`;\r\n  })\r\n  .join("");\r\n\r\n  let appHtml = \'\'; // отображение формы в зависимости от наличия токена\r\n\r\n  // если токен есть\r\n  if (_api_js__WEBPACK_IMPORTED_MODULE_2__.token) {\r\n\r\n   // форма добавления нового комментария \r\n   appHtml = ` \r\n   <div class="add-form" id="form">\r\n    <input \r\n      type="text" \r\n      class="input-form"\r\n      value=${_api_js__WEBPACK_IMPORTED_MODULE_2__.userName} disabled id="name-input" readonly\r\n      id="name-input"\r\n    />\r\n    <textarea \r\n      type="textarea" \r\n      class="text-area-form"\r\n      placeholder="Введите ваш коментарий"\r\n      rows="4"\r\n      id="text-input"\r\n    ></textarea>\r\n    <div class="add-form-row">\r\n      <button class="add-form-button" id="add-button">Написать</button>\r\n    </div>\r\n    <div>\r\n      <button class="button-delete" id="deleteComment">Удалить последний комментарий</button>\r\n    </div>\r\n   </div>`;\r\n\r\n  } else {\r\n\r\n   // ссылка на авторизацию\r\n   appHtml = `\r\n   <div class="comments-block" id="comments-block"> \r\n     <ul id="list" class="comments">\r\n     </ul>\r\n   <div/>\r\n   <div class="auth-info" id="load-comment">Чтобы добавить комментарий,\r\n    <a class="auth-link" href="#" id="log">авторизуйтесь</a>\r\n   </div>`;\r\n  }\r\n\r\n  appElement.innerHTML = commentatorsHtml + appHtml; // если есть токен - список комментариев + appHtml (либо форма добавления комментария, либо поле авторизации)\r\n\r\n  // токена нет\r\n  if (!_api_js__WEBPACK_IMPORTED_MODULE_2__.token) {\r\n    const logButtonElement = document.getElementById(\'log\'); // переход по ссылке авторизации\r\n    logButtonElement.addEventListener("click", () => {\r\n      (0,_renderForm_js__WEBPACK_IMPORTED_MODULE_3__.renderLogin)(_api_js__WEBPACK_IMPORTED_MODULE_2__.getComments);\r\n    });\r\n  } else {\r\n    (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.addNewComment) (); // добавление нового комментария\r\n  };\r\n  \r\n  (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.initEventListeners)();\r\n  (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.editEventListeners)();\r\n  (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.answerComment)();\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./renderCommentators.js?',
                );

                /***/
            },

        /***/ "./renderForm.js":
            /*!***********************!*\
  !*** ./renderForm.js ***!
  \***********************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__,
            ) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLogin: () => (/* binding */ renderLogin),\n/* harmony export */   renderRegistr: () => (/* binding */ renderRegistr)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./api.js");\n/* harmony import */ var _renderCommentators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCommentators.js */ "./renderCommentators.js");\n\r\n\r\n\r\n// отрисовка входа по логин/пароль(если уже зарегистрирован), либо регистрация нового пользователя\r\nconst renderLogin = () => {\r\n  const appElement = document.getElementById("app");\r\n  const loginHtml =\r\n    `<div class="auth-form" id="authForm">\r\n     <input \r\n      type="text" \r\n      class="input-form"\r\n      placeholder="Введите логин"\r\n      id="login-input"\r\n     />\r\n     <input \r\n      type="text" \r\n      class="input-form-two"\r\n      placeholder="Введите пароль"\r\n      rows="4"\r\n      id="password-input"\r\n     />\r\n     <div class="add-form-row">\r\n      <button class="add-form-button" id="auth-button">Войти</button>\r\n     </div>\r\n     <div class="add-form-link">\r\n      <button class="add-form-button" id="auth-button-link">Зарегистрироваться</button>\r\n    </div>`;\r\n\r\n  appElement.innerHTML = loginHtml;\r\n  \r\n  const loginInputElement = document.getElementById("login-input");\r\n  const passwordInputElement = document.getElementById("password-input");\r\n  const buttonLoginElement = document.getElementById("auth-button");\r\n\r\n  // клик на кнопку Войти\r\n  buttonLoginElement.addEventListener ("click", () => {\r\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLogin)({\r\n      login: loginInputElement.value,\r\n      password: passwordInputElement.value\r\n    })\r\n    .then((responsData) => {\r\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setToken)(responsData.user.token);\r\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setName)(responsData.user.login);\r\n      (0,_renderCommentators_js__WEBPACK_IMPORTED_MODULE_1__.renderCommentators)();\r\n    });\r\n    \r\n    loginInputElement.value = \'\';\r\n    passwordInputElement.value = \'\';\r\n  });\r\n\r\n  // кнопка Зарегистрироваться\r\n  const regButton = document.getElementById("auth-button-link");\r\n  regButton.addEventListener(\'click\', () => {\r\n    renderRegistr();\r\n  });\r\n};\r\n\r\n\r\n// отрисовка формы регистрации нового пользователя\r\nconst renderRegistr = () => {\r\n  const appRegElement = document.getElementById("app");\r\n  const registrHtml =\r\n    `<div class="add-form" id="regForm">\r\n     <input\r\n        type="text" \r\n        class="input-form auth-input-form"\r\n        placeholder="Введите имя"\r\n        id="regInputName" \r\n        required\r\n     />\r\n     <input\r\n        type="text" \r\n        class="input-form auth-input-form"\r\n        placeholder="Введите логин"\r\n        id="regInputLogin" \r\n        required\r\n      />\r\n        <input\r\n        type="password" \r\n        class="input-form auth-input-form"\r\n        placeholder="Введите пароль"\r\n        id="regInputPassword" \r\n        required\r\n      />\r\n      <div class="add-form-row">\r\n        <button class="add-form-button" id="regButton">Зарегестрироваться</button>\r\n      </div>\r\n    </div>`;\r\n\r\n  appRegElement.innerHTML = registrHtml;\r\n\r\n  const nameInputElement = document.getElementById("regInputName");\r\n  const regLoginInputElement = document.getElementById("regInputLogin");\r\n  const regPasswordInputElement = document.getElementById("regInputPassword");\r\n  const regButtonElement = document.getElementById("regButton");\r\n\r\n  // клик на кнопку Зарегистрироваться\r\n  regButtonElement.addEventListener(\'click\', () => {\r\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getRegistr)({\r\n          name: nameInputElement.value,\r\n          login: regLoginInputElement.value,\r\n          password: regPasswordInputElement.value,\r\n      }).then((responseData) => {\r\n          (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setToken)(responseData.user.token);\r\n          (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setName)(responseData.user.userName);\r\n          (0,_renderCommentators_js__WEBPACK_IMPORTED_MODULE_1__.renderCommentators)();\r\n      }).catch((error) => {\r\n          if (error.message === \'Failed to fetch\') {\r\n            alert("Кажется что-то пошло не так, попробуйте позже");\r\n          };\r\n          if (error.message === "Сервер упал") {\r\n            alert(\'Сервер сломался, попробуйте позже\');\r\n          };\r\n          if (error.message === "Короткие вводимые данные") {\r\n            alert(\'Неверный логин или пароль.\');\r\n          };\r\n        console.warn(error);\r\n      });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./renderForm.js?',
                );

                /***/
            },

        /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](
            module,
            module.exports,
            __webpack_require__,
        );
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
            /******/ for (var key in definition) {
                /******/ if (
                    __webpack_require__.o(definition, key) &&
                    !__webpack_require__.o(exports, key)
                ) {
                    /******/ Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key],
                    });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
        /******/ __webpack_require__.o = (obj, prop) =>
            Object.prototype.hasOwnProperty.call(obj, prop);
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module",
                });
                /******/
            }
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true,
            });
            /******/
        };
        /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module can't be inlined because the eval devtool is used.
    /******/ var __webpack_exports__ = __webpack_require__("./main.js");
    /******/
    /******/
})();
