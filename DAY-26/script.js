const dt = document.getElementById("dt");
// const hours = document.getElementById("hou");
// const minuts = document.getElementById("min");
// const seconds = document.getElementById("sec");
const time = document.getElementById("time");
const dy = document.getElementById("d");

// const month = new date();
const months = [
  "Jan",
  "Fab",
  "mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sap",
  "Act",
  "Nov",
  "Dec",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Satday",
];

setInterval(() => {
  const date = new Date();
  dt.textContent =
    date.getDate() +
    "/" +
    months[date.getMonth()] +
    "/" +
    date.getFullYear() +
    "/" +
    days[date.getDay()];
  // time.textContent =
  // date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  // hours.textContent = date.getHours() ;
  // minuts.textContent = date.getMinutes();
  // seconds.textContent = date.getSeconds();
});

function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minuts = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = hours >= 12 ? "PM" : "Am";

  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = hours < 10 ? "0" + hours : hours;
  minuts = minuts < 10 ? "0" + minuts : minuts;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minuts;
  document.getElementById("second").innerText = seconds;
  document.getElementById("ampm").innerText = ampm;
}

setInterval(updateClock, 1000);
