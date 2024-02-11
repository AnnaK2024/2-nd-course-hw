//* Задача 1
const num = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
  if (num[i] === 10) break;
}

//* Задача 2
const numA = [1, 5, 4, 10, 0, 3];
console.log(numA.indexOf(4));
// альтернативный вариант
// const numA = [1, 5, 4, 10, 0, 3];
// let res;
// numA.forEach((el, i) => {
  // if (el === 4) res = i;
// })
// console.log(res);

//* Задача 3
const numB = [1, 3, 5, 10, 20];
console.log(numB.join(' '));

//* Задача 4
let numC = []
for (i = 0; i < 3; i++) {
  const nestNumC = [];
  for (j = 0; j < 3; j++) {
    nestNumC.push(1);
  }
  numC.push(nestNumC);
}
console.log(numC);

//* Задача 5
const numD = [1, 1, 1];
numD.push(2 , 2 , 2);
console.log(numD);

//* Задача 6
const numE = [9, 8, 7, 'a', 6, 5];
numE.sort();
numE.pop();
// алтернативная запись numE.sort((a,b) => a-b).pop();
console.log(numE);

//* Задача 7
const numG = [9, 8, 7, 6, 5];
let guess = Number(prompt('Введи число от 1 до 10'));
if (isNaN(guess)) {
  alert('Не корректно введенны данные');
} else if (numG.includes(guess)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// *Задание 8
let numF = 'abcdef';
numF = numF.split("").reverse().join('');
console.log(numF);

//* Задание 9
const numJ = [[1, 2, 3,],[4, 5, 6]];
const flat = numJ.flat()
console.log(flat)

// Задание 10
const numH = [3, 1, 7, 9, 5, 8];
for (let i = 0; i < numH.length - 1; i++) {
    console.log(numH[i] + numH[i + 1]);
}

// Задание 11
const numK = [3, 8, 4, 6, 9];
function arr (nums) {
  return nums.map(el=> el**2);
}
console.log(arr(numK));

// Задание 12
const numL = ['слово', '', 'слог', 'длинное предложение', 'буква'];
function numL1(numL) {
  return numL.map(el => el.length);
}
console.log(numL1(numL));

// Задание 13
function filterPositive(array) {
  const numM = [];
  numM.push(array.filter(el => el < 0 ));
  return numM;
}    
console.log(filterPositive([-1, 0, 5, -10, 56] ));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

// Задание 14
const numO = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  );
const randomNumbers = numO(10, 10);
console.log(randomNumbers);

const evenNumbers = randomNumbers.filter(num => {
    return num % 2 === 0;
    });
console.log(evenNumbers);

// Задание 15
const numP = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round((Math.random() * (max-1))+1))
  );
const randomNumber = numP(6, 10);
console.log(randomNumber);

const arithmeticMean = (randomNumber) => randomNumber.reduce((acc, c) => acc + c, 0) / randomNumber.length;
const average = arithmeticMean(randomNumber);
console.log(average);



 




