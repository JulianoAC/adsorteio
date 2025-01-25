const img = document.getElementById("imagemsorteio");
const text = "adrianayres660@gmail.com";

img.addEventListener("click", () => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`Chave Pix: ${text} Copiada!`);
    })
    .catch((err) => {
      console.error("Erro", err);
    });
});
