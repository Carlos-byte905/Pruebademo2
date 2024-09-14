const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');   

function updateCountdown() {
const now = new Date().getTime();
const targetTime = new Date('December 31, 2024 23:59:59').getTime(); // Set your desired target time here
const timeDifference = targetTime - now;   

const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);   

daysElement.textContent = days.toString().padStart(2, '0');
hoursElement.textContent = hours.toString().padStart(2, '0');
minutesElement.textContent = minutes.toString().padStart(2, '0');
secondsElement.textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);   