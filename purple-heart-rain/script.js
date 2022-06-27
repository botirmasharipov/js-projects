function creatHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.innerText = "❤️";
  document.body.appendChild(heart);
}
setInterval(creatHeart, 300);
