//* Задача 1
const num = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < num.length; i++) {
    if (num[i] === 10) break;
    console.log(num[i]);
}

//* Задача 2
const numA = [1, 5, 4, 10, 0, 3];
console.log(numA.indexOf(4));

//* Задача 3
const numB = [1, 3, 5, 10, 20];
let str = numB.join(' ');
console.log(str);

//* Задача 4
const numC = [
    [1 , 1, 1],
    [1 , 1, 1],
    [1 , 1, 1],
]
console.log(numC);

//* Задача 5
const numD = [1, 1, 1];
numD.push(2 , 2 , 2);
console.log(numD);

//* Задача 6
const numE = [9, 8, 7, 'a', 6, 5];
numE = numE.sort();
console.log(numE);


