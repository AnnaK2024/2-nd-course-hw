function month() {
  let num = Number(prompt('Пожалуйста, введите номер месяца.'));
      if (num === 1 || num === 2 || num === 12 ) {
        alert ('Этот месяц относится к зимнему периоду');
      }else if (num === 3 || num === 4 || num === 5 ) {
        alert ('Этот месяц относится к весеннему периоду'); 
      }else if (num === 6 || num === 7 || num === 8 ) {
        alert ('Этот месяц относится к летнему периоду');
      }else if (num === 9 || num === 10 || num === 11 ) {
        alert ('Этот месяц относится к осеннему периоду');
      }else {
        alert ('Некорректное число!');
      }
}

function gameWords() {
  let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    alert (fruits.sort(() => Math.random() - 0.5));
  let questionOne = prompt('Какое слово было первым?').toLowerCase();
  let questionToo = prompt('Какое слово было последним?').toLowerCase();
    if (fruits[0].toLowerCase() === questionOne && fruits[fruits.length -1].toLowerCase() === questionToo) {
      alert ('Молодец! Верно!');
    } else if (fruits[0].toLowerCase() !==questionOne && fruits[fruits.length -1].toLowerCase() !== questionToo) {
      alert ('Не верно.Попробуй еще раз!');
    } else {
      alert ('Это было близко к победе.');
    }
}


function riddle() {
  let rid = (prompt('Отгадай загадку - Висит груша, нельзя скушать'));
      if (rid === груша ) {
        return('Угадал!!');
      }else {
        return('Не угадал!');
      }
}
