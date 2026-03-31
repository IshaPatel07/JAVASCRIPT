const image = document.getElementById("image");
const refresh = document.getElementById("btn-refresh");

function fetchdog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      image.src = data.message;
    });
}

fetchdog();

refresh.addEventListener("click", () => {
  fetchdog();
});
