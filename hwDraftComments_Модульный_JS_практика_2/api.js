const host = "https://wedev-api.sky.pro/api/v2/todos";
const userURL = "https://wedev-api.sky.pro/api/user/login";

export let token;
export const setToken = (newToken) => {
  token = newToken;
};

export let userName;
export const setName = (newName) => {
  userName = newName;
};

export function getTodos () {
   return fetch(host, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.json();
    });
};

export function deleteTodo ({id}) {
   return fetch(`${host}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        response.json();
      })
};

export function postTodo ({text}) {
   return fetch(host, {
      method: "POST",
      body: JSON.stringify({
        text: text,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) =>{
        return response.json();
      });
};

export function login ({login, password}) {
  return fetch(userURL, {
    method: "POST",
    body: JSON.stringify({
     login,
     password,
    }),
  })
  .then((response) =>{
    return response.json();
  });
};

