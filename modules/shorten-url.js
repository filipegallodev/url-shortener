import { createUrlElement } from "./create-url-element.js";

export async function shortenUrl(longUrl) {
  await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
    .then((response) => response.json())
    .then((data) => {
      createUrlElement(data.result.short_link, data.result.full_short_link);
    });
}
