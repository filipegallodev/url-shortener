export function createUrlElement(shortUrl, fullShortLink) {
  const resultado = document.querySelector(".resultado");

  const urlListElement = document.createElement("li");
  const urlLink = document.createElement("a");
  urlListElement.appendChild(urlLink);
  urlLink.innerHTML = shortUrl;
  urlLink.href = fullShortLink;
  urlLink.rel = "external";
  urlLink.target = "_blank";

  resultado.appendChild(urlListElement);
}
