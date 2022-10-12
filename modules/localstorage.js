import { createUrlElement } from "./create-url-element.js";

export function saveAllShortenedUrls() {
  const shortenedUrls = document.querySelectorAll(".url-element");

  const shortenedUrlsArray = Array();
  shortenedUrls.forEach((item) => {
    shortenedUrlsArray.push(item.innerText);
  });

  localStorage.setItem("shortened-urls", JSON.stringify(shortenedUrlsArray));
}

export function loadAllShortenedUrls() {
  const shortenedUrlsArray = JSON.parse(localStorage.getItem("shortened-urls"));

  if (shortenedUrlsArray !== undefined && shortenedUrlsArray !== null) {
    shortenedUrlsArray.forEach((item) => {
      const itemArray = item.split("\n");
      createUrlElement(itemArray[0], itemArray[2]);
    });
  }
}
