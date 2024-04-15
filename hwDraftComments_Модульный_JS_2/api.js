const host = "https://wedev-api.sky.pro/api/v2/:anna-kalina/comments";
export let token = "";
export let userName = "";

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
