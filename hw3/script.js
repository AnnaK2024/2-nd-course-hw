// Задание 1
let password = 'Пароль';
password=password.toLowerCase();
let question = prompt ("Введите пароль");
if (question === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен не правильно');
}

// Задание 2
let c = 8;
let action = prompt ('Введите число');
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

// Задание 3
let d = 60;
let e = 180;
let enter = prompt ('Введите число');
if (d > 100 || e >100) {
    console.log('Верно')
} else {
    console.log('Не верно')
}

// Задание 4
let a = '2';
let b = '3';
let num = Number(a) + Number(b);
alert(num);

// Задание 5
let monthNumber = 12;
let seasons = prompt ('Введите номер месяца');
switch (seasons) {
    case '1':
        alert('сезон зима');
        break;
    case '2':
        alert('сезон зима');
        break;
    case '3':
        alert('сезон весна');
        break;
    case '4':
        alert('сезон весна');
        break;
    case '5':
        alert('сезон весна');
        break;
    case '6':
        alert('сезон лето');
        break;
    case '7':
        alert('сезон лето');
        break;
    case '8':
        alert('сезон лето');
        break;
    case '9':
        alert('сезон осень');
        break;
    case '10':
        alert('сезон осень');
        break;
    case '11':
        alert('сезон осень');
        break;
    case '12':
        alert('сезон зима');
        break;

    default:
        alert('без сезона')
        break;
}

// Задание 7
let check = prompt('Пожалуйста, введите любое число');
if (!isNaN(Number(check))) {
   if (check % 2 === 0) {
       alert('Число четное');
   } else {
       alert('Число не четное');
   } 
} else {
    alert('Это не число!')
}

// Задание 8
let clientOS = 0;
switch (clientOS) {
    case 0:
        console.log('Установите версию приложения для iOS по ссылке')
        break;
    case 1:
        console.log('Установите версию приложения для Android по ссылке')
        break;
}

// Задание 9
let clientAN = 0;
let clientDeviceYear = 2015;
if (clientDeviceYear >=2015) {
    switch (clientAN) {
        case 0:
            console.log('Установите версию приложения для iOS по ссылке');
            break;
        case 1:
            console.log('Установите версию приложения для Android по ссылке');
            break;
    }
} else {
    switch (clientAN) {
        case 0:
            console.log('Установите облегченную версию приложения для iOS по ссылке');
            break;
        case 1:
            console.log('Установите облегченную версию приложения для Android по ссылке');
            break;
    } 
}


