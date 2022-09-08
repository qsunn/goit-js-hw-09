import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('[data-start]');
const datetimePicker = document.querySelector('#datetime-picker');
const values = [...document.querySelectorAll('.value')];

let selectedDate = '';
let timeHasLeft;
let ms = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] <= new Date()) {
            btnStart.disabled = true;
            alert("Please choose a date in the future");
        } else {
            btnStart.disabled = false;
            selectedDate = selectedDates[0];
        }
    },
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

const addLeadingZero = (value) => value.toString().padStart(2, "0");

btnStart.disabled = true;
btnStart.addEventListener('click', () => {
    const interval = setInterval(() => {
        ms = selectedDate - new Date();
        timeHasLeft = convertMs(ms);
        const dateValues = Object.values(timeHasLeft);
        const dateKeys = Object.keys(timeHasLeft);
        values.forEach((item, i) => item.innerHTML = addLeadingZero(timeHasLeft[dateKeys[i]]));
        if (dateValues.filter(item => item === 0).length === dateValues.length) clearInterval(interval);
    }, 1000);
});

flatpickr(datetimePicker, options);