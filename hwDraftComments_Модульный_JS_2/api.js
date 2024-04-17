const host = "https://wedev-api.sky.pro/api/v2/:anna-kalina/comments";
const userUrl = "https://wedev-api.sky.pro/api/user/login";

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
  return fetch(userUrl, {
    method: "POST",
    body: JSON.stringify ({
      login,
      password,
    }),
  })
  .then((response) => {
    return response.json();
  })
};
