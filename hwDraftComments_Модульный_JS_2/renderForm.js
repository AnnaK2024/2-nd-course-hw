import { getLogin, getRegistr, setName, setToken } from "./api.js";
import { renderCommentators } from "./renderCommentators.js";

// отрисовка входа по логин/пароль(если уже зарегистрирован), либо регистрация нового пользователя
export const renderLogin = () => {
  const appElement = document.getElementById("app");
  const loginHtml =
    `<div class="auth-form" id="authForm">
     <input 
      type="text" 
      class="input-form"
      placeholder="Введите логин"
      id="login-input"
     />
     <input 
      type="text" 
      class="input-form-two"
      placeholder="Введите пароль"
      rows="4"
      id="password-input"
     />
     <div class="add-form-row">
      <button class="add-form-button" id="auth-button">Войти</button>
     </div>
     <div class="add-form-link">
      <a class="add-form-button" href="#" id="auth-button-link">Зарегистрироваться</a>
    </div>`;

  appElement.innerHTML = loginHtml;
  
  const loginInputElement = document.getElementById("login-input");
  const passwordInputElement = document.getElementById("password-input");
  const buttonLoginElement = document.getElementById("auth-button");

  // клик на кнопку Войти
  buttonLoginElement.addEventListener ("click", () => {
    getLogin({
      login: loginInputElement.value,
      password: passwordInputElement.value
    })
    .then((responsData) => {
      setToken(responsData.user.token);
      setName(responsData.user.setName);
      renderCommentators();
    });
    
    loginInputElement.value = '';
    passwordInputElement.value = '';
  });

    // кнопка Зарегистрироваться
  const regButton = document.querySelector('auth-button-link');
    regButton.addEventListener('click', () => {
      renderRegistr();
    });
};



// отрисовка формы регистрации нового пользователя
export const renderRegistr = () => {
  const appRegElement = document.querySelector("app");
  const registrHtml =
   `<div class="add-form" id="regForm">
     <input
        type="text" 
        class="input-form auth-input-form"
        placeholder="Введите имя"
        id="regInputName" 
        required
     />
     <input
        type="text" 
        class="input-form auth-input-form"
        placeholder="Введите логин"
        id="regInputLogin" 
        required
      />
        <input
        type="password" 
        class="input-form auth-input-form"
        placeholder="Введите пароль"
        id="regInputPassword" 
        required
      />
      <div class="add-form-row">
        <button class="add-form-button" id="regButton">Зарегестрироваться</button>
      </div>
      <button class="auth-button">Войти</button>
    </div>`;

  appRegElement.innerHTML = registrHtml;

  const nameInputElement = document.getElementById("regInputName");
  const regLoginInputElement = document.getElementById("regInputLogin");
  const regPasswordInputElement = document.getElementById("regInputPassword");
  const regButtonElement = document.getElementById("regButton");

  // клик на кнопку Зарегистрироваться
  regButtonElement.addEventListener('click', () => {
      getRegistr({
          name: nameInputElement.value,
          login: regLoginInputElement.value,
          password: regPasswordInputElement.value,
      }).then((responseData) => {
          setToken(responseData.user.token);
          setName(responseData.user.userName);
          renderCommentators();
      }).catch((error) => {
          if (error.message === 'Failed to fetch') {
            alert("Кажется что-то пошло не так, попробуйте позже");
          };
          if (error.message === "Сервер упал") {
            alert('Сервер сломался, попробуйте позже');
          };
          if (error.message === "Короткие вводимые данные") {
            alert('Неверный логин или пароль.');
          };
        console.warn(error);
      });
  });
  // кнопка Войти
  const authButton = document.querySelector(".auth-button");
  authButton.addEventListener('click', () => {
    renderLogin();
  });
};

