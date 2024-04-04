export function getComments () {
 return fetch("https://wedev-api.sky.pro/api/v1/:anna-kalina/comments", {
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
  return fetch("https://wedev-api.sky.pro/api/v1/:anna-kalina/comments", {
    method: "POST",
     body: JSON.stringify ({
       name: name,
       text: text,
     }),
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