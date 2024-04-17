import { getLogin, setToken, token } from "./api.js";

export const renderLogin = ({getComments}) => {
    const appElement = document.getElementById("app");
    const loginHtml = `
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
  `;

  appElement.innerHTML = loginHtml;

  const enterButton = document.getElementById("auth-button");
  const loginInputElement = document.getElementById("login-input");
  const passwordInputElement = document.getElementById("password-input");

  enterButton.addEventListener ("click", () => {
        getLogin({
          login: loginInputElement.value,
          password: passwordInputElement.value
        })
        .then((responsData) => {
          console.log(token);
          setToken(responsData.user.token);
          console.log(token);
        })
        .then(() => {
           getComments();
        });
    });
};

