import { getLogin, setName, setToken } from "./api.js";
import { renderRegistration } from "./renderRegistration.js";

export const renderLogin = ({getComments}) => {
    const appElement = document.getElementById("app");
    const loginHtml =`
    <div class="auth-form" id="authFform">
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
    </div>
  <div class="auth-info" >
    <a href="#" class="auth-link" id="auth-button-link">Зарегистрироваться</a>
  </div>`;

  appElement.innerHTML = loginHtml;

  const buttonLoginElement = document.getElementById("auth-button");
  const loginInputElement = document.getElementById("login-input");
  const passwordInputElement = document.getElementById("password-input");

  buttonLoginElement.addEventListener ("click", () => {
    getLogin({
      login: loginInputElement.value,
       password: passwordInputElement.value
    })
    .then((responsData) => {
      setToken(responsData.user.token);
      setName(responsData.user.userName);
      getComments();
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

    const authButton = document.querySelector("auth-button-link");
    authButton.addEventListener('click', () => {
      renderRegistration();
    });
    
    loginInputElement.value = '';
    passwordInputElement.value = '';
  });
};
