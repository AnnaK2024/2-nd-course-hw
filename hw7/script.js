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
function getRandomArrNumbers(n) {
  const arr = [];
  let i = n/2
  i = Math.floor(i);
  for (let index = 0; index < i; index++) {
    return arr(Math.round(Math.random()*n))
  };
}
getRandomArrNumbers(12)

