import { shortenUrl } from "./modules/shorten-url.js";

const shortenButton = document.querySelector(".shorten-button");

shortenButton.addEventListener("click", (event) => {
  event.preventDefault();

  const longUrl = document.querySelector(".long-url").value;

  shortenUrl(longUrl);
});
