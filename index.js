//Desafio de lógica Classificador de Nível de Herói

// variáveis com o nome e a quantidade de XP do herói
let nomeHeroi = "Rambo"
let xpDoHeroi = 0

// Variável para armazenar o nível do herói
let nivelDoHeroi = ""

// Estrutura switch case para determinar o nível com base no XP
switch (true) {
    case (xpDoHeroi <= 1000):
        nivelDoHeroi = "Ferro"
        break
    case (xpDoHeroi >= 1001 && xpDoHeroi <= 2000):
        nivelDoHeroi = "Bronze"
        break
    case (xpDoHeroi >= 2001 && xpDoHeroi <= 5000):
        nivelDoHeroi = "Prata"
        break
    case (xpDoHeroi >= 5001 && xpDoHeroi <= 7000):
        nivelDoHeroi = "Ouro"
        break
    case (xpDoHeroi >= 7001 && xpDoHeroi <= 8000):
        nivelDoHeroi = "Platina"
        break
    case (xpDoHeroi >= 8001 && xpDoHeroi <= 9000):
        nivelDoHeroi = "Ascendente"
        break
    case (xpDoHeroi >= 9001 && xpDoHeroi <= 10000):
        nivelDoHeroi = "Imortal"
        break
    case (xpDoHeroi >= 10001):
        nivelDoHeroi = "Radiante"
        break
}

// Exibe a mensagem com o nome e o nível do herói
console.log("O Herói " + nomeHeroi + " está no nível" + nivelDoHeroi)