const nameElement = document.getElementById ('name-input');
const textElement = document.getElementById ('text-input');


export const sanitizeHtml = (htmlString) => {
    return htmlString
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("QUOTE_BEGIN", "<div class='quote'>")
    .replaceAll("QUOTE_END", "</div>")
};

export function checkingForEmptyLines () {
    nameElement.classList.remove("error");
    textElement.classList.remove("error");
    
    if (nameElement.value.trim() === "") {
      nameElement.classList.add("error");
      return;
    }  
    if (textElement.value.trim() === "") {
      textElement.classList.add("error");
      return;
    };
};
