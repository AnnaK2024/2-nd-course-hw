
// window.onload = function() {
//   let preloader = document.getElementById('preloader');
// };

// <div class="loader"></div>

export function delay(interval = 300) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, interval)
    })
}

export const sanitizeHtml = (htmlString) => {
    return htmlString
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll('QUOTE_BEGIN', "<div class='quote'>")
        .replaceAll('QUOTE_END', '</div>')
}
