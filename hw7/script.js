// Задача 1
const riddle = prompt('Шубка серая для лета,для зимы другого цвета');
const answer = 'ЗАЙЧИК';
if (riddle.toUpperCase() === answer.toUpperCase()) { 
alert('Это правильный ответ!'); 
} else {
alert(`Не угадал, правильный ответ: ${answer}`); 
}
console.log(answer)

// Задача 2 
function searchStart(arr, str) {
const products = arr.filter((el)=> el.toLowerCase().includes(str.toLowerCase()));
return products;
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []

// Задача 3
const num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Задача 4
const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

// Задача 5
function getRandomInt(minValue, maxValue) {
return Math.round (Math.random()*(maxValue-minValue)) + minValue;
}
console.log(getRandomInt(1, 10));

// Задача 6
const getRandomArrNumbers = (n) => {
  const arr = [];
  let arrLength = Math.floor(n/2);
  for (let i = 0; i < arrLength; i++) {
    arr.push(Math.round(Math.random() * n));
  }
  return arr
}
console.log(getRandomArrNumbers(12));

// Задача 7
function getRandomNumberRange(min, max) {
  return Math.round (Math.random() * (max-min)) + min;
}
console.log(getRandomNumberRange(8, 13));

// Задача 8
let todayDate = new Date();
console.log(todayDate);

// // Задача 8 2ой варинат
// // для начала создадим массив, в который занесем все дни недели на русском
// // помним, что отсчет в JS начинается с воскресенья - 0
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let myDate = new Date();// здесь мы получаем текущую дату
// let fullDate = "Сегодня: " + myDate.getDate() +// getDate возвращает число
// " " + months[myDate.getMonth()] + // getMonth возвращает номер месяца, который мы можем использовать в качестве индекса для массива months
// " " + myDate.getFullYear() + // getFullYear возвращает год
// ", " + days[myDate.getDay()]; // getDay возвращает номер дня недели, который мы используем в качестве индекса для массива days

// console.log(fullDate); //Cегодня: 1 Февраль 2023, Среда

// Задача 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задача 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
console.log(fullDate, myDate.toLocaleTimeString('ru-RU'));




