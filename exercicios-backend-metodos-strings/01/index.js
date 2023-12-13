//Sistema de filtro de comentários

const comentario = "Esse negócio é muito perigoso!";

if (
  comentario.includes("covid") ||
  comentario.includes("COVID") ||
  comentario.includes("pandemia") ||
  comentario.includes("PANDEMIA")
) {
  console.log(`Comentário bloqueado por conter palavras proibidas`);
} else {
  console.log(`Comentário autorizado`);
}
