const container = document.querySelector(".container");
const loader = document.querySelector(".loader");

const content = document.createElement("div");
content.classList.add("none");
content.classList.add("content");

document.addEventListener("DOMContentLoaded", (event) => {
  container.appendChild(content);
});

window.addEventListener("load", (event) => {
  loader.classList.add("none");
  content.classList.remove("none");
});
