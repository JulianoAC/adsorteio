const img = document.getElementById("imagem");
const text = "adrianayres660@gmail.com";

img.addEventListener("click", () => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Chave Pix Copiada!");
    })
    .catch((err) => {
      console.error("Erro", err);
    });
});
