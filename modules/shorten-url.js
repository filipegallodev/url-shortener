import { createUrlElement } from "./create-url-element.js";

export async function shortenUrl(longUrl) {
  await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        return createUrlElement(longUrl, data.result.short_link);
      }
      return errorHandler(data);
    });
}

function errorHandler(data) {
  function validInputRequired() {
    const longUrlInput = document.querySelector(".long-url");
    longUrlInput.classList.add("valid-input-required");
  }

  switch (data.error_code) {
    case 1:
      validInputRequired();
      alert("[ATENÇÃO] Nenhuma URL inserida! Preencha o campo vazio.");
      break;
    case 2:
      validInputRequired();
      alert("[ATENÇÃO] A URL inserida é inválida!");
      break;
    case 3:
      alert("[ATENÇÃO] Aguarde um segundo antes de tentar novamente!");
      break;
    case 4:
      alert(
        "[ATENÇÃO] O endereço de IP foi bloqueado por violar os termos de serviço da shrtcode. \nhttps://shrtco.de/tos ."
      );
      break;
    case 5:
      alert("[ATENÇÃO] shrtcode já pego ou em uso!");
      break;
    case 6:
      alert("[ATENÇÃO] Erro desconhecido!");
      break;
    case 7:
      alert("[ATENÇÃO] Nenhum código especificado!");
      break;
    case 8:
      alert("[ATENÇÃO] Código inválido inserido!");
      break;
    case 9:
      alert("[ATENÇÃO] Os parâmetros requeridos estão ausentes!");
      break;
    case 10:
      validInputRequired();
      alert(
        "[ATENÇÃO] Você está tentando encurtar um URL proibido pela shrtco! \n\nSaiba mais em: https://shrtco.de/disallowed"
      );
      break;
    default:
      break;
  }
}
