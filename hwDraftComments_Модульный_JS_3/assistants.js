export const currentDate = (date) => {
    let dateTime = new Date(date)

    const day = String(dateTime.getDate()).padStart(2, '0')
    const month = String(dateTime.getMonth() + 1).padStart(2, '0')
    const year = String(dateTime.getFullYear() - 2000)
    const minutes = String(dateTime.getMinutes()).padStart(2, '0')
    const hours = String(dateTime.getHours()).padStart(2, '0')

    return `${day}.${month}.${year} ${hours}:${minutes}`
}

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
