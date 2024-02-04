function month() {
  let num = Number(prompt('Пожалуйста, введите номер месяца.'));
      if (num === 1 || num === 2 || num === 12 ) {
        return ('Этот месяц относится к зимнему периоду');
      }else if (num === 3 || num === 4 || num === 5 ) {
        return ('Этот месяц относится к весеннему периоду'); 
      }else if (num === 6 || num === 7 || num === 8 ) {
        return ('Этот месяц относится к летнему периоду');
      }else if (num === 9 || num === 10 || num === 11 ) {
        return ('Этот месяц относится к осеннему периоду');
      }else {
        return ('Некорректное число!');
      }
}

function gameWords() {
  const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  alert (fruits.sort(() => Math.random() - 0.5));
  const questionOne = (prompt('Какое слово было первым?'));
  questionOne = questionOne.toLocaleLowerCase();
  const questionToo = (prompt('Какое слово было вторым?'));
  questionToo = questionToo.toLocaleLowerCase();
    if (fruits[0] === questionOne && fruits[fruits.length -1] === questionToo ) {
      alert('Молодец! Верно!');
    } else if (fruits[0] !==questionOne || fruits[fruits.length -1] !== questionToo) {
      alert('Это было близко к победе!');
    } else {
      alertn('Не верно.Попробуй еще раз');
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
