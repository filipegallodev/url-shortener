import { loadAllShortenedUrls } from "./modules/localstorage.js";
import { shortenUrl } from "./modules/shorten-url.js";
import { verifyExistingUrl } from "./modules/verify-existing-url.js";

const shortenButton = document.querySelector(".shorten-button");

shortenButton.addEventListener("click", (event) => {
  event.preventDefault();

  const longUrl = document.querySelector(".long-url");
  longUrl.classList.remove("valid-input-required");

  if (!verifyExistingUrl(longUrl.value)) {
    shortenUrl(longUrl.value);
  }
  longUrl.value = "";
});

loadAllShortenedUrls();
