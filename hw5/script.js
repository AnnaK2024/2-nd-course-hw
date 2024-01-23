//* Задание 1
function min(a , b) {
    if ( a < b) {
        return a;
    } else {
        return b;
    }
};
console.log(min(4 , 8));

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
  console.log(a*a);
}
let b = square(2);

//*Задание 3.2
function square(c) {
    return c*c;
}
let d = square(3);

//*Задание 4
function greeting() {
    let age = Number(prompt("Сколько Вам лет?"));
    if (age <0) {
        alert("Вы ввели неправильное значение");
    } else if(age >=0 && age <= 12) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}
console.log(greeting());

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
    if (isNaN(request)) {
        return 'Переданный параметр не является числом';
    } else {
        return request*3;
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
let num = Number(prompt('Пожалуйста, введите номер месяца.'));  
function month(num) {
      if (num === 1 || num === 2 || num === 12 ) {
        return 'Этот месяц относится к зимнему периоду';
    }else if (num === 3 || num === 4 || num === 5 ) {
        return 'Этот месяц относится к весеннему периоду'; 
    }else if (num === 6 || num === 7 || num === 8 ) {
        return 'Этот месяц относится к летнему периоду';
    }else if (num === 9 || num === 10 || num === 11 ) {
        return 'Этот месяц относится к осеннему периоду';
    }else if (num >= 13) {
        return 'Такого месяца не существует!'
    }
};

console.log(month(num));
    