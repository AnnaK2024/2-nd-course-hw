//*Задание 1
let a = 10;
alert(10);
a = 20;
alert(20);

//*Задание 2
let birthPhone = ("год выпуска первого iPhone");
alert("год выпуска первого iPhone 2007");

//*Задание 3
let creatorJavaScript = ("создателем языка JavaScript был Brandan Eich");
alert("создателем языка JavaScript был Brandan Eich");

//*Задание 4
let x = 10, y = 2;
let resultPlus = x + y;
alert(resultPlus);
let resultMinus = x - y;
alert(resultMinus);
let resultMultiplication = x * y;
alert(resultMultiplication);
let resultDivision = x / y;
alert(resultDivision);

//*Задание 5
let c = 2, d = 5;
let resultDegree = c ** d;
alert(resultDegree);

//*Задание 6
let e = 9, f = 2;
let resultRemains = e % f;
alert(resultRemains);

//*Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

//*Задание 8
let age = Number(prompt ("Сколько вам лет?"));
alert(42);

//*Задание 9
let user = {
    name: 'Anna',
    age: 42,
    isAdmin:true,
};

//*Задание 9.1
let user = {
    name: 'Anna',
    age: 42,
    isAdmin:true,
};
user['city of residence'] = 'Москва';

//*Задание 9.2
let user = {
    name: 'Anna',
    age: 42,
    isAdmin:true,
};
user['city of residence'] = 'Москва';
user.age = 43;

//*Задание 9.3
let user = {
    name: 'Anna',
    age: 42,
    isAdmin:true,
};
user['city of residence'] = 'Москва';
user.age = 43;
delete user['city of residence'] = 'Москва';

//*Задание 9.4
let user = {
    name: 'Anna',
    age: 42,
    isAdmin:true,
};
user['city of residence'] = 'Москва';
user.age = 43;
delete user['city of residence'] = 'Москва';

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(console.log(user[name]));
alert(console.log(user[age]));
alert(console.log(user[isAdmin]));

//*Задание 10
let nameNew = prompt("Привет, ИМЯ!");
alert(nameNew);