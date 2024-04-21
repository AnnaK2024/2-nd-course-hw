import _ from 'lodash';

registerUser({
    login: login,
    password: password,
    name: _.capitalize(name),
  })
    .then((user) => {
      setToken(`Bearer ${user.user.token}`);
      fetchTodosAndRender();
    })
    .catch((error) => {
      // TODO: Выводить алерт красиво
      alert(error.message);
    });