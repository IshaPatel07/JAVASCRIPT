
// DOM - document object model

//html file -> object

// nail cutter

// we can control htnml/css using js

//random bg colour generator
//document.body.style.backgroundcolor ="black";


// alert("Hello.....")

const buttons= document.getElementsByTagName("button");//used to get element(tag)from document(inde3x.html) by tag name.

// button = <button> Click </button>

// buttons[0].textcontent ="name changed";//to change next content of any element.

// bhutton[1].textContent ="button changed"

// process = event
// to add click on button,addEventlistener

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
