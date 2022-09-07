import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('[data-start]');
const datetimePicker = document.querySelector('#datetime-picker');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

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
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

const addLeadingZero = (value) => value.length < 2 ? value.padStart(2, "0") : value; 

btnStart.disabled = true;
btnStart.addEventListener('click', () => {
    setInterval(() => {
        ms = selectedDate - new Date();
        timeHasLeft = convertMs(ms);

        dataDays.innerHTML = addLeadingZero(timeHasLeft.days + '');
        dataHours.innerHTML = addLeadingZero(timeHasLeft.hours + '');
        dataMinutes.innerHTML = addLeadingZero(timeHasLeft.minutes + '');
        dataSeconds.innerHTML = addLeadingZero(timeHasLeft.seconds + '');
    }, 1000);
})


flatpickr(datetimePicker, options);