// // Задача 1
const people1 = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];
people1.sort(( a, b ) => a.age - b.age);
console.log(people1);

// Задача 2
function isPositive(number) {
  return number > 0;
}

function filter(arr, ruleFunction) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
      if (ruleFunction(arr[i])) {
          output.push(arr[i]);
      }
  }
  return output;
}
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

  
const people2 = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

function isMale(item) {
  return item.gender === 'male';
}

function filter(arr, ruleFunction) {
  const output = []; 
  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      output.push(arr[i]);
    }
  }
  return output;
}
console.log(filter(people2, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// Задача 3
let currentDate = new Date();
console.log(currentDate);

let taimerId = setInterval(() =>console.log(new Date), 3000);
setTimeout(() => {
  clearInterval(taimerId);
  console.log('30 секунд прошло!');
}, 30000);

// //Альтернативный вариант через функцию
// function func(delay) {
//   let cat = setInterval(() => console.log(new Date()), delay);

//   setTimeout(() => {
//     clearInterval(cat);
//     console.log(`${delay / 100} секунд прошло`);
//   }, delay * 10);
// }
// func(4000);

// Задача 4
function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// Задача 5
function delayForSecond(cb) {
  setTimeout(() => {
    console.log('Прошла одна секунда');
    if(cb) { 	cb(); }
  }, 1000)
}

function sayHi (name) {
  console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'))