console.log("-> Desafio nível Herói");

const nome = prompt("Digite o nome do herói:");
const qtdXp = parseInt(prompt("Digite a quantidade de experiência (XP):"));
let nivel = "";

if (qtdXp < 1000) {
  nivel = "Ferro";
} else if (qtdXp >= 1000 && qtdXp <= 2000) {
  nivel = "Bronze";
} else if (qtdXp >= 2001 && qtdXp <= 5000) {
  nivel = "Prata";
} else if (qtdXp >= 5001 && qtdXp <= 7000) {
  nivel = "Ouro";
} else if (qtdXp >= 7001 && qtdXp <= 8000) {
  nivel = "Platina";
} else if (qtdXp >= 8001 && qtdXp <= 9000) {
  nivel = "Ascendente";
} else if (qtdXp >= 9001 && qtdXp <= 10000) {
  nivel = "Imortal";
} else if (qtdXp >= 10001) {
  nivel = "Radiante";
} else {
  console.log("Erro: Valor de XP inválido.");
}

const mensagem = `O Herói de nome ${nome} está no nível de ${nivel}`;

console.log(mensagem);
