//* Задание 1
function min(a , b) {
    if ( a < b) {
        return a;
    } else {
        return b;
    }
};
// альтернативная запись тернальным оператором {return a<b ? a : b;}
console.log(min(4 , 8));
console.log(min(9 , 5));
console.log(min(6 , 6));

//*Задание 2
function meaning() {
    let num = prompt('Пожалуйста, введите число!');
    if ( num % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
};
console.log(meaning());

//*Задание 3.1
function square(a) {
  console.log(a * a);
}
square(3);

//*Задание 3.2
function square1(c) {
    return c * c;
};
console.log(square1(5));

//*Задание 4
function greeting() {
    let age = Number(prompt('Сколько вам лет?'));
    if (age < 0) {
     alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
     alert('Привет, друг!');
    } else {
     alert('Добро пожаловать!');
    }
};
greeting()

//*Задание 5
function choice() {
    let num1 = prompt('Пожалуйста, введите первое число!');
    let num2 = prompt('Пожалуйста, введите второе число!');
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1*num2;
    }
};
console.log(choice());

//*Задание 6
function check() {
    let request = prompt('Пожалуйста, введите число!');
    request = Number(request);
    if (isNaN(request)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${request} в кубе равняется ${request ** 3}`;
    }
};
console.log(check());

//*Задание 7
function getRectangleArea() {
    return this.radius**2*3.14;
  }
  function getRectanglePerimeter() {
    return this.radius*3.14;
  }
  
let circle1 = {
    radius: 5,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};
let circle2 = {
    radius: 6,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};
console.log(circle1.getArea());

console.log(circle1.getPerimeter());

console.log(circle2.getArea());

console.log(circle2.getPerimeter());

//*Задание 8
function month() {
    let num = Number(prompt('Пожалуйста, введите номер месяца.')); 
      if (num === 1 || num === 2 || num === 12 ) {
        return 'Этот месяц относится к зимнему периоду';
      }else if (num === 3 || num === 4 || num === 5 ) {
        return 'Этот месяц относится к весеннему периоду'; 
      }else if (num === 6 || num === 7 || num === 8 ) {
        return 'Этот месяц относится к летнему периоду';
      }else if (num === 9 || num === 10 || num === 11 ) {
        return 'Этот месяц относится к осеннему периоду';
      }else if (num >= 13) {
        return 'Некорректное число!';
    }
};
console.log(month());
