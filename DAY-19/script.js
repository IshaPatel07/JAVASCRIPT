const buttons = document.getElementsByTagName("button");

buttons[0].addEventListener("click", () => {
  const str = Math.floor(Math.random() * 16581375).toString(16);
  document.body.style.backgroundColor = "#" + str;

  buttons[0].textContent = str;
});
buttons[1].addEventListener("click", () => {
  const str = Math.floor(Math.random() * 16581375).toString(16);
  document.body.style.backgroundColor = "#" + str;

  buttons[1].textContent = str;
});
