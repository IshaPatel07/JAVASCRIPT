const emailregx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passregx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-btn");

function formValidator() {
  const email = emailInput.value;
  const password = passwordInput.value;

  const isEmailValid = emailregx.test(email);
  const ispasswordValid = passregx.test(password);

  if (isEmailValid && ispasswordValid) {
    alert("both are valid !!");
  } else if (isEmailValid) {
    alert("password is invalid !!");
  } else if (ispasswordValid) {
    alert("email is invalid !!");
  } else {
    alert("both are invalid !!");
  }
}

submitBtn.addEventListener("click", formValidator);
