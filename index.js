const btn = document.querySelector(".btn");
const message = document.querySelector(".message");

btn.addEventListener("click", () => {
  message.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  if (!message.contains(event.target) && event.target !== btn) {
    message.classList.remove("show");
  }
});
