const button = document.getElementById("button");
const container1 = document.getElementById("container-1");
const container2 = document.getElementById("container-2");

function readMore() {
  container1.classList.toggle("display");
}
button.addEventListener("click", readMore);
