//* Задача 1
const num = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
  if (num[i] === 10) break;
}

//* Задача 2
const numA = [1, 5, 4, 10, 0, 3];
console.log(numA.indexOf(4));

//* Задача 3
const numB = [1, 3, 5, 10, 20];
let str = numB.join(' ');
console.log(str);

//* Задача 4
let numC = []
for (let i = 0; i < 3; i++) {
  numC[i] = [];
  for (let j = 0; j < 3; j++) {
    numC[i][j] = 1;
  };
};
console.log(numC);

//* Задача 5
const numD = [1, 1, 1];
numD.push(2 , 2 , 2);
console.log(numD);

//* Задача 6
const numE = [9, 8, 7, 'a', 6, 5];
numE.sort();
numE.pop();
console.log(numE);

//* Задача 7
const numG = [9, 8, 7, 6, 5];
let guess = Number(prompt('Введи число от 1 до 10'));
if (numG.includes(guess)) {
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
let square = numK.map(el=> (el**2));
console.log(square);

// Задание 12
const numL = ['слово', '', 'слог', 'длинное предложение', 'буква'];
function numL1(numL) {
    let newnum = [];
 for (let i = 0; i < numL.length; i++) {
     newnum.push( numL[i].length);
 }
 return newnum;
} 
console.log(numL1(numL));

// Задание 13
function filterPositive(array) {
  const numM = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
       numM.push(array[i])
    }    
  }
  return numM
}    
console.log(filterPositive[-1, 0, 5, -10, 56]);

filterPositive([-1, 0, 5, -10, 56] ); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

// Задание 14
const numO = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  );
const numbers = numO(10, 10);
console.log(numbers);

const namOeven = numbers.filter(number => {
    return number % 2 === 0;
    });
console.log(namOeven);

// Задание 15
const numP = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  );
const numb = numP(6, 10);
console.log(numb);

const numP1 = (numb) => numb.reduce((acc, c) => acc + c, 0) / numb.length;
const average = numP1(numb);
console.log(average);



 




