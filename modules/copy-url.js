export function copyUrl() {
  const copyUrlButtons = document.querySelectorAll(".copy-button");

  function copyUrl(event) {
    const copyButton = event.target;
    const urlToCopy = copyButton.previousElementSibling.innerHTML;

    navigator.clipboard.writeText(urlToCopy);

    copyButton.innerHTML = "Copiado!";
    setTimeout(() => {
      copyButton.innerHTML = "Copiar";
    }, 2500);
  }

  copyUrlButtons.forEach((copyButton) => {
    copyButton.addEventListener("click", (event) => copyUrl(event));
  });
}
