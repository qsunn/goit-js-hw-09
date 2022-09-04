const start = document.querySelector('[data-start]');
const end = document.querySelector('[data-end]');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

start.addEventListener('click', () => {
    start.disabled = true;
    const interval = setInterval(() => document.body.style.background = getRandomHexColor(), 1000);
})

end.addEventListener('click', () => {
    start.disabled = false;
    clearInterval(interval);
})