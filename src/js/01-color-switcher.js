const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

startBtn.addEventListener("click", onStartBtnClick);
stopBtn.addEventListener("click", onStopBtnClick);

stopBtn.setAttribute("disabled", '');

function onStartBtnClick() {
    startBtn.setAttribute("disabled", '');
    stopBtn.removeAttribute("disabled");

    timerId = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`;
        console.log('Змінюємо колір');                
    }, 1000);
}

function onStopBtnClick() {
    clearInterval(timerId);
    console.log('Зупиняємо зміну кольору')
    startBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled", '');
}

