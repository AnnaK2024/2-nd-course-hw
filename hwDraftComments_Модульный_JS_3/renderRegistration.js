import { registr, setToken } from './api.js'
import { renderLogin } from './renderLogin.js'

export const renderRegistration = ({ getComments }) => {
    const addRegForm = document.querySelector('app')
    const regFormHtml = `
    <div class="add-form" id="regForm">
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
            <a class="add-form-button" href="#" id="regButton">Зарегестрироваться</a>
        </div>
        <button class="auth-button">Войти</button>
    </div>`

    addRegForm.innerHTML = regFormHtml

    const regButtonElement = document.getElementById('regButton')
    const regNameInputElement = document.getElementById('regInputName')
    const regLoginInputElement = document.getElementById('regInputLogin')
    const regPasswordInputElement = document.getElementById('regInputPassword')

    regButtonElement.addEventListener('click', () => {
        registr({
            name: nameInputElement.value,
            login: loginInputElement.value,
            password: passwordInputElement.value,
        })
            .then((responseData) => {
                console.log(token)
                setToken(responseData.user.token)
                setName(responseData.user.login)
                getComments()
            })
            .catch((error) => {
                if (error.message === 'Failed to fetch') {
                    alert('Кажется что-то пошло не так, попробуйте позже')
                }
                if (error.message === 'Сервер упал') {
                    alert('Сервер сломался, попробуйте позже')
                }
                if (error.message === 'Короткие вводимые данные') {
                    alert('Неверный логин или пароль.')
                }
                console.warn(error)
            })
    })
    const authButton = document.querySelector('.auth-button')
    authButton.addEventListener('click', () => {
        renderLogin()
    })

    regNameInputElement.value = ''
    regLoginInputElement.value = ''
    regPasswordInputElement.value = ''
}
