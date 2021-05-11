import './style.scss'

//flash message
function setFlashFade(flashEl) {
    setTimeout(() => {
        let currentOpacity = 1.0;
        let timer = setInterval(() => {
            if (currentOpacity < 0.05) {
                clearInterval(timer);
                flashEl.remove();
            }
            currentOpacity = currentOpacity - 0.5;
            flashEl.style.opacity = currentOpacity;
        }, 50)
    }, 4000)
}

export const flashToFrontEnd = (message) => {
    let flashMessageDiv = document.createElement('div');
    flashMessageDiv.setAttribute('id', 'flash-message');
    flashMessageDiv.setAttribute('class', 'alert alert-danger');
    flashMessageDiv.innerText = message;
    document.getElementsByTagName('body')[0].appendChild(flashMessageDiv);
    setFlashFade(flashMessageDiv);
}
//flash message

