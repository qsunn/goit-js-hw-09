const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let interval;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

start.addEventListener('click', () => {
    stop.disabled = false;
    start.disabled = true;
    interval = setInterval(() => document.body.style.background = getRandomHexColor(), 1000);
})

stop.disabled = true;
stop.addEventListener('click', () => {
    stop.disabled = true;
    start.disabled = false;
    clearInterval(interval);
})