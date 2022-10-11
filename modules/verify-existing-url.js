export function verifyExistingUrl(longUrlInput) {
  const shortUrls = document.querySelectorAll(".url-element div:first-child");

  let existUrl = false;
  shortUrls.forEach((item) => {
    if (item.innerText === longUrlInput) {
      alert("[ATENÇÃO] Esta URL já foi encurtada!");
      existUrl = true;
    }
  });

  return existUrl;
}
