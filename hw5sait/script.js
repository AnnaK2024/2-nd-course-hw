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
    return 'Некорректное число!'
}
};
alert(month(num));
