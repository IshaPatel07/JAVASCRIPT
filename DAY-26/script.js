const dt = document.getElementById("dt");
const time = document.getElementById("time");

// days = [
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
// ];

// switch (days) {
//   case "1":
//     "Monday";
//     break;
//   case "2":
//     "Tuesday";
//     break;
//   case "3":
//     "Wednesday";
//     break;
//   case "4":
//     "Thursday";
//     break;
//   case "5":
//     "Friday";
//     break;
//   case "6":
//     "saturday";
//     break;
//   case "7":
//     "Sunday";
// }

setInterval(() => {
  const date = new Date();
  dt.textContent =
    date.getDate() + "/" + date.getDay() + "/" + date.getFullYear();
  time.textContent =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
});
