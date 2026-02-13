// CALCULADORA DE PARTIDAS RANQUEADAS

function calculaNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    let nivel = ""

    if (vitorias < 10) {
        nivel = "Ferro"
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata"
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro"
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário"
    } else if (vitorias >= 101) {
        nivel = "Imortal"
    }

    //DESAFIO
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)
}

console.log("=== VAMOS TESTAR ALGUNS HERÓIS ===\n")

let vitoriasHerois = [5, 15, 30, 60, 85, 95, 120]
let derrotasHerois = [2, 5, 10, 20, 30, 40, 50]

for (let i = 0; i < vitoriasHerois.length; i++) {
    console.log("Herói número " + (i + 1) + ":")
    console.log("Vitórias: " + vitoriasHerois[i] + " | Derrotas: " + derrotasHerois[i])
    calculaNivel(vitoriasHerois[i], derrotasHerois[i])
    console.log("---")
}

console.log("\n=== FIM DOS TESTES ===")