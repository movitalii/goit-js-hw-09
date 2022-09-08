
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {                            
  },
};

const input = document.querySelector("#datetime-picker");
const fp = flatpickr(input, options);

input.addEventListener("input", onInput);

function onInput(event) {
    const selectedTime = new Date(`${event.currentTarget.value}`)
    const selectetimeInMs = selectedTime.getTime();
    console.log(selectetimeInMs);

    const currentTime = Date.now();
        setInterval(() => {
        const currentTime = Date.now();
        const clock = selectetimeInMs - currentTime;
        console.log('time left:', clock)            
    }, 1000);   
}

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
