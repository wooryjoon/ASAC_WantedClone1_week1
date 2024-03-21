const $loading = document.querySelector(".loading-container");
const section = document.querySelector("section");
setTimeout(() => {
  section.classList.remove("loading");
  $loading.classList.add("loading");
}, 0);
