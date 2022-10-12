import { copyUrl } from "./copy-url.js";
import { saveAllShortenedUrls } from "./localstorage.js";

export function createUrlElement(longUrl, data) {
  const shortenUrlList = document.querySelector(".shorten-url-result");

  const urlListElement = document.createElement("li");
  const elementContent = document.createElement("div");
  elementContent.classList.add("url-element");
  urlListElement.appendChild(elementContent);

  const originalUrl = document.createElement("div");
  elementContent.appendChild(originalUrl);

  const longUrlLink = document.createElement("p");
  longUrlLink.innerHTML = longUrl;
  originalUrl.appendChild(longUrlLink);

  const shortUrlAndCopyButton = document.createElement("div");
  shortUrlAndCopyButton.classList.add("short-url-container");
  elementContent.appendChild(shortUrlAndCopyButton);

  const shortUrlLink = document.createElement("a");
  shortUrlLink.innerHTML = data;
  shortUrlLink.href = `https://${data}`;
  shortUrlLink.rel = "external";
  shortUrlLink.target = "_blank";
  shortUrlAndCopyButton.appendChild(shortUrlLink);

  const urlCopyButton = document.createElement("button");
  urlCopyButton.innerText = "Copiar";
  urlCopyButton.classList.add("copy-button");
  shortUrlAndCopyButton.appendChild(urlCopyButton);

  shortenUrlList.appendChild(urlListElement);

  saveAllShortenedUrls();
  copyUrl();
}
