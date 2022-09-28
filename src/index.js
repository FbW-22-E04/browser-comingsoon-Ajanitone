//import "./styles/main.scss"; // Don't delete :)
//import smile from "./scripts/smile.js"; // Feel free to delete :)

// All of your javascript should go here :)

//smile(); // Feel free to delete :)

const dayCounter = document.querySelector("#day");
const hourCounter = document.querySelector("#hour");
const minuteCounter = document.querySelector("#minute");
const secondCounter = document.querySelector("#second");
const button = document.querySelector("button");

const countDown = setInterval(() => {
  const newYear = new Date("16 October 2022 ").getTime();

  console.log(newYear);

  const theNow = new Date().getTime();

  const diff = newYear - theNow;
  const days = 1000 * 60 * 60 * 24;
  const hours = 1000 * 60 * 60;
  const minutes = 1000 * 60;
  const seconds = 1000;
  const daysLeft = Math.floor(diff / days);
  const hoursLeft = Math.floor((diff % days) / hours);
  const minutesLeft = Math.floor(((diff % days) % hours) / minutes);
  const secondsLeft = Math.floor((diff % minutes) / seconds);

  dayCounter.textContent = `${daysLeft} days`;
  hourCounter.textContent = `${hoursLeft} hours`;
  minuteCounter.textContent = `${minutesLeft} mins`;
  secondCounter.textContent = `${secondsLeft} sec`;
  button.addEventListener("click", () => {
    button.textContent = `You will be notified in ${daysLeft} days, for the premiere`;
    if (
      (button.textContent = `You will be notified in ${daysLeft}days, for the premiere`)
    ) {
      setInterval(() => {
        window.location.reload();
      }, 10000);
    }
  });
  if (diff <= 0) {
    button.textContent = "Expired";
    button.style.backgroundColor = "orange";
    clearInterval(countDown);
  }
}, 1000);
