//*Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//*Задание 2
const birthPhone = ("год выпуска первого iPhone 2007");
alert(birthPhone);

//*Задание 3
const creatorJavaScript = ("создателем языка JavaScript был Brandan Eich");
alert(creatorJavaScript);

//*Задание 4
let x = 10, y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);


//*Задание 5
let result = 2**5;
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
let age = prompt("Сколько вам лет?");
alert(age);

//*Задание 9
let user = {
    name: 'Anna',
    age: 42,
    isAdmin: true
};

//*Задание 9.1
user['city of residence'] = 'Москва';

//*Задание 9.2
user.age = 43;

//*Задание 9.3
delete user['city of residence'] = 'Москва';

//*Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//*Задание 10
let nameNew = prompt("Как Вас зовут?");
alert(`Привет, ${nameNew}!`);