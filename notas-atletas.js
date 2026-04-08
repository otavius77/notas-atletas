let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMedia(notas) {
    // Ordena as notas
    notas = notas.sort((a, b) => a - b);

    // Remove a menor e a maior
    let notasValidas = notas.slice(1, notas.length - 1);

    // Soma as notas
    let soma = 0;
    notasValidas.forEach(nota => {
        soma += nota;
    });

    // Calcula média
    return soma / notasValidas.length;
}

for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];

    // Ordena as notas para exibir
    let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);

    let media = calcularMedia(atleta.notas.slice());

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasOrdenadas}`);
    console.log(`Média Válida: ${media}`);
    console.log(""); // linha em branco
}