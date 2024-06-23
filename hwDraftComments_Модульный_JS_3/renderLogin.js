import { userLogin, setName, setToken } from './api.js'

export const renderLogin = ({ getComments }) => {
    const appElement = document.getElementById('app')
    const loginHtml = `<div class="auth-form" id="authFform">
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
      <button class="add-form-button" id="auth-button-link">Зарегистрироваться</button>
  </div>`

    appElement.innerHTML = loginHtml

    const buttonLoginElement = document.getElementById('auth-button')
    const loginInputElement = document.getElementById('login-input')
    const passwordInputElement = document.getElementById('password-input')

    buttonLoginElement.addEventListener('click', () => {
        userLogin({
            login: loginInputElement.value,
            password: passwordInputElement.value,
        }).then((responsData) => {
            setToken(responsData.user.token)
            setName(responsData.user.name)
            getComments()
        })

        loginInputElement.value = ''
        passwordInputElement.value = ''
    })
}

// const authButton = document.querySelector(".auth-button");
// authButton.addEventListener('click', () => {
//     renderLoginForm();
// });
