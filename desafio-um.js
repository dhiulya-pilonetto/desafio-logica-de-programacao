// variáveis
let heroiEscolhido = "Scooby-Doo"
let XPdoHeroi = 8003
let nivelDoHeroi = " "

// estrutura de decisão
if (XPdoHeroi <= 1000) {
    nivelDoHeroi = "Ferro";

} else if (XPdoHeroi >= 1001 && XPdoHeroi <= 2000) { 
    nivelDoHeroi = "Bronze";

} else if (XPdoHeroi >= 2001 && XPdoHeroi <= 5000) {
    nivelDoHeroi = "Prata";

} else if (XPdoHeroi >= 5001 && XPdoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";

} else if (XPdoHeroi >= 7001 && XPdoHeroi <= 8000) {
    nivelDoHeroi = "Platina";

} else if (XPdoHeroi >= 8001 && XPdoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";

} else if (XPdoHeroi >= 9001 && XPdoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";

} else if (XPdoHeroi > 10001) {
    nivelDoHeroi = "Radiante"
}

//saída
console.log ("O herói de nome " + heroiEscolhido + " está no nível " + nivelDoHeroi)