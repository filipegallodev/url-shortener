export function copyUrl() {
  const copyUrlButtons = document.querySelectorAll(".copy-button");

  function copyUrl(event) {
    const copyButton = event.target;
    const urlToCopy = copyButton.previousElementSibling.innerHTML;

    navigator.clipboard.writeText(urlToCopy);

    copyButton.innerHTML = "Copiado!";
    copyButton.classList.toggle("copyed");
    setTimeout(() => {
      copyButton.innerHTML = "Copiar";
      copyButton.classList.toggle("copyed");
    }, 3000);
  }

  copyUrlButtons.forEach((copyButton) => {
    copyButton.addEventListener("click", (event) => copyUrl(event));
  });
}
