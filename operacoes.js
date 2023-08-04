
let numeroVinteEDois = 22;
let stringVinteEDois = "22";
let numeroCinco = 5;
let stringCinco = "5";
let numeroDez = 10;
let stringDez = "10";

// com o 'igual a' ==

if(numeroVinteEDois == stringVinteEDois) {
    console.log("As variáveis realmente tem o mesmo valor, mas tipos diferentes. Tu é brabo!");
} else {
    console.log("As variáveis não tem o mesmo valor... 😢");
}

if(numeroCinco == stringCinco){
    console.log("As variáveis realmente tem o mesmo valor, mas tipos diferentes. Tu é brabo!");
} else {
    console.log("As variáveis não tem o mesmo valor... 😢");
}

if(numeroDez == stringDez) {
    console.log("As variáveis realmente tem o mesmo valor, mas tipos diferentes. Tu é brabo!");
} else {
    console.log("As variáveis não tem o mesmo valor... 😢");
}

// com o 'identico a' ===

let numero1 = 2004;
let string1 = "2004";
let numero2 = 2003;
let string2 = "2003";

if(numero1 === string1) {
    console.log("As variáveis realmente tem o mesmo valor, mas tipos diferentes. Tu é brabo!");
} else {
    console.log("As variáveis não tem o mesmo valor... 😢");
}

if(numero2 === string2) {
    console.log("As variáveis realmente tem o mesmo valor, mas tipos diferentes. Tu é brabo!");
} else {
    console.log("As variáveis não tem o mesmo valor... 😢");
}

const andreAventureiro = {
    nome: "André",
    poder: "Bola de fogo",
    nivelDaArmadura: Math.floor(Math.random() * 100) + 1,

};

const nataliaAventureira = { 
    nome1: "Natália",
    poder1: "Dragão de água",
    nivelDaArmadura1: Math.floor(Math.random() * 100) + 1,

};

if(nataliaAventureira.nivelDaArmadura1 >= andreAventureiro.nivelDaArmadura) {
    console.log(`${nataliaAventureira.nome1} você chance de derrotar o ${andreAventureiro.nome}, acabe com ele usando seu ${nataliaAventureira.poder1}!`);
} else {
    console.log(`${nataliaAventureira.nome1} você vai ser amassada e mandada para o "beleleu" pela ${andreAventureiro.poder} do ${andreAventureiro.nome}... Corra!`);
}

const probabilidadeVitoriaNatalia = 0.5;
const probabilidadeVitoriaAndre = 1 - probabilidadeVitoriaNatalia;

const randomNatalia = Math.random();
const randomAndre = Math.random();

if(randomNatalia < probabilidadeVitoriaNatalia) {
    console.log(`${nataliaAventureira.nome1}, você consegue derrotar o ${andreAventureiro.nome}, acabe com ele usando seu ${nataliaAventureira.poder1}!`);
} else if (randomAndre < probabilidadeVitoriaAndre) {
    console.log(`${nataliaAventureira.nome1}, você vai ser amassada e mandada para o "beleleu" pela ${andreAventureiro.poder} do ${andreAventureiro.nome}... Corra!`);
} else {
    console.log("Vocês são dois pébas, tentem novamente (empate)");
}