import { copyUrl } from "./copy-url.js";

export function createUrlElement(shortUrl, fullShortLink) {
  const shortenUrlList = document.querySelector(".shorten-url-result");

  const urlListElement = document.createElement("li");
  const elementContent = document.createElement("div");
  urlListElement.appendChild(elementContent);

  const urlLink = document.createElement("a");
  urlLink.innerHTML = shortUrl;
  urlLink.href = fullShortLink;
  urlLink.rel = "external";
  urlLink.target = "_blank";
  elementContent.appendChild(urlLink);

  const urlCopyButton = document.createElement("button");
  urlCopyButton.innerText = "Copiar";
  urlCopyButton.classList.add("copy-button");
  elementContent.appendChild(urlCopyButton);

  shortenUrlList.appendChild(urlListElement);

  copyUrl();
}
