import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) { 
    if (selectedDates[0].getTime() - Date.now() <= 0) {
      Notiflix.Notify.failure("Please choose a date in the future");
      startBtn.setAttribute("disabled", '');
    } else {
      startBtn.removeAttribute("disabled");
  }
  },
};

const input = document.querySelector("#datetime-picker");
const fp = flatpickr(input, options);

const startBtn = document.querySelector("[data-start]")
const spanDays = document.querySelector("[data-days]");
const spanHours = document.querySelector("[data-hours]");
const spanMinutes = document.querySelector("[data-minutes]");
const spanSeconds = document.querySelector("[data-seconds]");

input.addEventListener("input", onInput);
startBtn.addEventListener("click", onBtnClick);

startBtn.setAttribute("disabled", '');

let selectetimeInMs = '';
let timerId = null;

function onInput(event) {   
  const selectedTime = new Date(`${event.currentTarget.value}`)
  selectetimeInMs = selectedTime.getTime();
}

function onBtnClick() {
  startBtn.setAttribute("disabled", '');
  input.setAttribute("disabled", '');

  timerId = setInterval(() => {
    const currentTime = Date.now();        
    const clock = selectetimeInMs - currentTime; 
    const { days, hours, minutes, seconds } = convertMs(clock);
    console.log(`${days}:${hours}:${minutes}:${seconds}`);
    
    spanDays.textContent = `${days}`;
    spanHours.textContent = `${hours}`;
    spanMinutes.textContent = `${minutes}`;
    spanSeconds.textContent = `${seconds}`;
    
     if (clock < 1000)  {
      clearInterval(timerId);
    }
  }, 1000); 
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
