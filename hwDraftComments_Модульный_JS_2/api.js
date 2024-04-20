const host = 'https://wedev-api.sky.pro/api/v2/:anna-kalina/comments';
const userLog = 'https://wedev-api.sky.pro/api/user/login';
const userReg = 'https://wedev-api.sky.pro/api/user';

export let token = "";
export let userName = "";

export const setToken = (newToken) => {
  token = newToken;
};

export const setName = (newName) => {
  userName = newName;
};

export function getComments () {
 return fetch(host, {
    method: "GET" 
 })
  .then((response) => {
    if (response.status === 500) {
     throw new Error("Сервер упал");
    }
    if (response.status === "Failed to fetch") {
     throw new Error("Кажется что-то пошло не так, попробуй позже..");
    }
     return response.json();
  })
  .catch((error) => {
    if (error.message === "Сервер упал") {
      alert("Нет интернета");
    }
    if (error.message === "Failed to fetch") {
      alert("Кажется что-то пошло не так, попробуй позже..");
    };
  });
};

export function getPost ({name, text}) {
  return fetch(host, {
    method: "POST",
     body: JSON.stringify ({
       name: name,
       text: text,
     }),
     headers: {
      Authorization: `Bearer${token}`,
     }
  })
  .then((response) => {
    if (response.status === 500) {
      throw new Error("Сервер упал");
    }
    if (response.status === 400) {
      throw new Error("Вводимые данные слишком короткие");
    }  
    return response.json();
  })
};

export function getLogin (login, password) {
  return fetch(userLog, {
    method: "POST",
    body: JSON.stringify ({
      login,
      password,
    }),
    forceError: true,
  })
  .then((response) => {
    if (response.status === 500) {
      throw new Error("Сервер упал");
    }
    if (response.status === 400) {
      throw new Error("Вводимые данные слишком короткие");
    }  
    return response.json();
  })
};

export function getRegistration (name, login, password) {
  return fetch(userReg, {
    method: "POST",
    body: JSON.stringify ({
      name,
      login,
      password,
    }),
    forceError: true,
  })
  .then((response) => {
    if (response.status === 500) {
      throw new Error("Сервер упал");
    }
    if (response.status === 400) {
      throw new Error("Вводимые данные слишком короткие");
    }  
    return response.json();
  })

};
