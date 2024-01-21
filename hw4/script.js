// Задание 1
for (let i = 0; i < 2; i++) {
    console.log("Привет!");
 }
 
 // Задание 2
 for (let x = 1; x <= 5; x++) {
     console.log(1);
 }
 
 // Задание 3
 for (let y = 7; y <= 22; y++) {
     console.log(1);
 }
 
 //Задание 4
 let object = {
     "Коля": "200",
     "Вася": "300",
     "Петя": "400"
 };
 for (let key in object) {
     console.log(`${key} - зарплата ${object[key]} долларов.`);
 }
 
 // Задание 5
 let n = 1000;
 let num = 0;
 while (n >= 50) {
     n /= 2;
     num++;
 }
 console.log(n);
 console.log(num);
 
 // Задание 6
 let firstFriday = 5;
 for (let i = firstFriday; i <= 31; i+=7) {
     console.log(`Сегодня пятница, ${i}-e число. Необходимо подготовить отчет.`);
     
 }