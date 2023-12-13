//URL amigável

const texto = "Aprenda programar do zero na Cubos Academy";

const textoURL = texto
  .toLowerCase()
  .replace(/ /g, "-")
  .replace(/ç/g, "c")
  .replace(/á/g, "a")
  .replace(/ã/g, "a")
  .replace(/â/g, "a")
  .replace(/é/g, "e")
  .replace(/ê/g, "e")
  .replace(/í/g, "i")
  .replace(/ó/g, "o")
  .replace(/õ/g, "o")
  .replace(/ô/g, "o")
  .replace(/ú/g, "u")
  .replace(/ü/g, "u")
  .replace(/ñ/g, "n");

console.log(textoURL);
