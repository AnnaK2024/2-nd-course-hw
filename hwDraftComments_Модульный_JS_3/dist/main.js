/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   getLogin: () => (/* binding */ getLogin),\n/* harmony export */   getPost: () => (/* binding */ getPost),\n/* harmony export */   getRegistr: () => (/* binding */ getRegistr),\n/* harmony export */   setName: () => (/* binding */ setName),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   token: () => (/* binding */ token),\n/* harmony export */   userName: () => (/* binding */ userName)\n/* harmony export */ });\nconst host = 'https://wedev-api.sky.pro/api/v2/:anna-kalina/comments'\nconst userLog = 'https://wedev-api.sky.pro/api/user/login'\nconst userReg = 'https://wedev-api.sky.pro/api/user'\n\nlet token = ''\nconst setToken = (newToken) => {\n    token = newToken\n}\n\nlet userName = ''\nconst setName = (newName) => {\n    userName = newName\n}\n\nfunction getComments() {\n    return fetch(host, {\n        method: 'GET',\n    })\n        .then((response) => {\n            if (response.status === 500) {\n                throw new Error('Сервер упал')\n            }\n            if (response.status === 'Failed to fetch') {\n                throw new Error('Кажется что-то пошло не так, попробуй позже..')\n            }\n            return response.json()\n        })\n        .catch((error) => {\n            if (error.message === 'Сервер упал') {\n                alert('Нет интернета')\n            }\n            if (error.message === 'Failed to fetch') {\n                alert('Кажется что-то пошло не так, попробуй позже..')\n            }\n        })\n}\n\nfunction getPost({ name, text }) {\n    return fetch(host, {\n        method: 'POST',\n        body: JSON.stringify({\n            name: name,\n            text: text,\n        }),\n        headers: {\n            Authorization: `Bearer ${token}`,\n        },\n    }).then((response) => {\n        if (response.status === 500) {\n            throw new Error('Сервер упал')\n        }\n        if (response.status === 400) {\n            throw new Error('Вводимые данные слишком короткие')\n        }\n        return response.json()\n    })\n}\n\nfunction getLogin({ login, password }) {\n    return fetch(userLog, {\n        method: 'POST',\n        body: JSON.stringify({\n            login,\n            password,\n        }),\n    }).then((response) => {\n        return response.json()\n    })\n}\n\nfunction getRegistr({ name, login, password }) {\n    return fetch(userReg, {\n        method: 'POST',\n        body: JSON.stringify({\n            name: name,\n            login: login,\n            password: password,\n        }),\n    }).then((response) => {\n        return response.json()\n    })\n}\n\n// export function deleteComment({ id }) {\n//   return fetch(userReg + id, {\n//      method: \"DELETE\",\n//   }).then((response) => {\n//      return response.json();\n//   });\n// };\n\n\n//# sourceURL=webpack:///./api.js?");

/***/ }),

/***/ "./assistants.js":
/*!***********************!*\
  !*** ./assistants.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   delay: () => (/* binding */ delay),\n/* harmony export */   sanitizeHtml: () => (/* binding */ sanitizeHtml)\n/* harmony export */ });\n\n// window.onload = function() {\n//   let preloader = document.getElementById('preloader');\n// };\n\n// <div class=\"loader\"></div>\n\nfunction delay(interval = 300) {\n    return new Promise((resolve) => {\n        setTimeout(() => {\n            resolve()\n        }, interval)\n    })\n}\n\nconst sanitizeHtml = (htmlString) => {\n    return htmlString\n        .replaceAll('&', '&amp;')\n        .replaceAll('<', '&lt;')\n        .replaceAll('>', '&gt;')\n        .replaceAll('\"', '&quot;')\n        .replaceAll('QUOTE_BEGIN', \"<div class='quote'>\")\n        .replaceAll('QUOTE_END', '</div>')\n}\n\n\n//# sourceURL=webpack:///./assistants.js?");

/***/ }),

/***/ "./eventListeners.js":
/*!***************************!*\
  !*** ./eventListeners.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewComment: () => (/* binding */ addNewComment),\n/* harmony export */   answerComment: () => (/* binding */ answerComment),\n/* harmony export */   editEventListeners: () => (/* binding */ editEventListeners),\n/* harmony export */   initEventListeners: () => (/* binding */ initEventListeners)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _assistants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assistants.js */ \"./assistants.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n// добавление нового комментария\nfunction addNewComment() {\n    const buttonElement = document.getElementById('add-button')\n    const textElement = document.getElementById('text-input')\n    const nameElement = document.getElementById('name-input')\n    const addForm = document.getElementById('form')\n    const loader = document.querySelector('#preloader')\n\n    buttonElement.addEventListener('click', () => {\n        nameElement.classList.remove('error')\n        textElement.classList.remove('error')\n\n        if (nameElement.value.trim() === '') {\n            nameElement.classList.add('error')\n            return\n        }\n        if (textElement.value.trim() === '') {\n            textElement.classList.add('error')\n            return\n        }\n\n        addForm.classList.add('hidden')\n        loader.textContent = 'Комментарий добавляется .....'\n\n        ;(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPost)({\n            name: nameElement.value,\n            text: textElement.value,\n        })\n            .then(() => {\n                return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)().then((responseData) => {\n                    let appComments = responseData.comments.map((comment) => {\n                        return {\n                            name: comment.author.name,\n                            date: (0,_assistants_js__WEBPACK_IMPORTED_MODULE_1__.currentDate)(comment.date),\n                            comment: comment.text,\n                            likes: comment.likes,\n                            isLiked: comment.isLiked,\n                        }\n                    })\n                    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(appComments)\n                    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\n                })\n            })\n            .catch((error) => {\n                if (error.message === 'Сервер упал') {\n                    alert('Нет интернета')\n                }\n                if (error.message === 'Вводимые данные слишком короткие') {\n                    alert('Имя или текст менее трех символов')\n                }\n                if (error.message === 'Failed to fetch') {\n                    alert('Кажется что-то пошло не так, попробуй позже..')\n                }\n            })\n            .finally(() => {\n                addForm.classList.remove('hidden')\n                loader.textContent = ''\n            })\n    })\n}\n\n//Лайки\nlet initEventListeners = () => {\n    const likeButtonElement = document.querySelectorAll('.like-button')\n    for (const likeButtonEl of likeButtonElement) {\n        const index = likeButtonEl.dataset.index\n        const counter = likeButtonEl.dataset.like\n\n        likeButtonEl.addEventListener('click', (e) => {\n            e.stopPropagation()\n\n            likeButtonEl.classList.add('-loading-like')\n            likeButtonEl.disabled = true\n\n            ;(0,_assistants_js__WEBPACK_IMPORTED_MODULE_1__.delay)(2000).then(() => {\n                if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].isLiked === false) {\n                    const result = Number(counter) + 1\n\n                    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].likes = result\n                    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].isLiked = true\n                } else if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].isLiked === true) {\n                    const result = Number(counter) - 1\n\n                    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].likes = result\n                    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].isLiked = false\n                }\n\n                Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\n            })\n        })\n    }\n}\n\n// редактирование комментария\nfunction editEventListeners() {\n    const editButtonElements = document.querySelectorAll('.edit-button')\n    for (const editButtonEl of editButtonElements) {\n        editButtonEl.addEventListener('click', (e) => {\n            e.stopPropagation()\n            const index = editButtonEl.dataset.index\n            Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].isEdit = !Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].isEdit\n            Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\n        })\n    }\n\n    const saveButtons = document.querySelectorAll('.save-button')\n    for (const saveButton of saveButtons) {\n        saveButton.addEventListener('click', (e) => {\n            e.stopPropagation()\n            const index = saveButton.dataset.index\n            Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].isEdit = !Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].isEdit\n            Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].comment = saveButton\n                .closest('.comment')\n                .querySelector('textarea').value\n            Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\n        })\n    }\n}\n\n//ответ на комментирий\nfunction answerComment() {\n    const commentsElements = document.querySelectorAll('.comment')\n    const textElement = document.getElementById('text-input')\n\n    for (const commentsEl of commentsElements) {\n        commentsEl.addEventListener('click', (event) => {\n            event.stopPropagation()\n\n            const index = commentsEl.dataset.index\n\n            if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].isEdit) return\n\n            textElement.value = `QUOTE_BEGIN${Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].comment}\\n${Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[index].name}QUOTE_END`\n\n            Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\n        })\n    }\n}\n\n// добавление нового комментария по нажатию на Enter\nconst formElement = document.getElementById('form')\nif (formElement) {\n    formElement.addEventListener('keyup', keyEvent)\n    function keyEvent(e) {\n        if (e.code === 'Enter') {\n            buttonElement.dispatchEvent(new Event('click'))\n        }\n    }\n}\n\n// удаление последнего комментария\nconst removeButton = document.getElementById('deleteComment')\nif (removeButton) {\n    removeButton.addEventListener('click', () => {\n        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).pop()\n        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\n    })\n}\n\n\n//# sourceURL=webpack:///./eventListeners.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _assistants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assistants.js */ \"./assistants.js\");\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners.js */ \"./eventListeners.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './src/renderForm.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n// форма добавления нового комментария\nfunction getCom() {\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)().then((responseData) => {\n        let appComments = responseData.comments.map((comment) => {\n            return {\n                name: comment.author.name,\n                date: createDate(comment.date),\n                comment: comment.text,\n                likes: comment.likes,\n                isLiked: comment.isLiked,\n            }\n        })\n\n        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(appComments)\n        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n            сommentators: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n            initEventListeners: _eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.initEventListeners,\n            answerComment: _eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.answerComment,\n            delay: _assistants_js__WEBPACK_IMPORTED_MODULE_1__.delay,\n        })\n        preloader.classList.add('preloader-hidden')\n    })\n}\ngetCom()\n\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './src/renderForm.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({ getComments: _api_js__WEBPACK_IMPORTED_MODULE_0__.getComments })\n\n;(0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.initEventListeners)({ сommentators: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) }, { renderCommentators: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) })\n\n;(0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.answerComment)(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../renderCommentators.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))\n\nconsole.log('It works!')\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;