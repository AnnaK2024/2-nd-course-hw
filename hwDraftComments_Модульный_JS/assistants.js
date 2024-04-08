export  const currentDate = new Date();
function formatTime(currentDate){

 const date = currentDate.getDate().toString().padStart(2, "0");
 const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
 const year = currentDate.getFullYear().toString().substr(2,2);

 const h = currentDate.getHours().toString().padStart(2, "0");
 const m = currentDate.getMinutes().toString().padStart(2, "0");

 return `${date}.${month}.${year} ${h}:${m}`
};
