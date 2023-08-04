# 7 Days of Code - Alura

## Introdução

Este repositório contém um código desenvolvido como parte das atividades do evento "7 Days of Code" promovido pela Alura. Neste projeto, exploramos conceitos de comparação entre variáveis e a criação de objetos em JavaScript.

## Comparações de Valores

Nesta seção do código, foram realizadas algumas comparações entre variáveis numéricas e de texto utilizando os operadores de igualdade (`==`) e identidade (`===`). O objetivo foi entender as diferenças entre esses operadores e seus efeitos nas comparações.

Foram criadas diversas variáveis, como `numeroVinteEDois`, `stringVinteEDois`, `numeroCinco`, `stringCinco`, `numeroDez` e `stringDez`. Em seguida, com o operador `==`, realizamos as seguintes comparações:

```javascript
if (numeroVinteEDois == stringVinteEDois) {
    console.log("As variáveis realmente têm o mesmo valor, mas tipos diferentes. Tu é brabo!");
} else {
    console.log("As variáveis não têm o mesmo valor... 😢");
}

// ... outras comparações com '=='
```

A saída esperada será "As variáveis realmente têm o mesmo valor, mas tipos diferentes. Tu é brabo!" para todas as comparações, pois o operador `==` compara apenas o valor das variáveis, ignorando o tipo.

## Comparações Estritas

Em seguida, utilizamos o operador de identidade `===` para realizar comparações estritas, verificando tanto o valor quanto o tipo das variáveis:

```javascript
if (numero1 === string1) {
    console.log("As variáveis realmente têm o mesmo valor, mas tipos diferentes. Tu é brabo!");
} else {
    console.log("As variáveis não têm o mesmo valor... 😢");
}

// ... outras comparações com '==='
```

Nesse caso, a saída esperada será "As variáveis não têm o mesmo valor... 😢" para todas as comparações, pois o operador `===` verifica se o valor e o tipo das variáveis são idênticos.

## Batalha de Aventureiros

Nesta parte do código, criamos dois objetos, `andreAventureiro` e `nataliaAventureira`, representando dois aventureiros com seus nomes, poderes e níveis de armadura. Utilizamos a função `Math.random()` para gerar valores aleatórios para o nível da armadura de ambos os aventureiros.

```javascript
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
```

Em seguida, com base nos níveis de armadura gerados, comparamos os aventureiros para determinar o resultado da batalha:

```javascript
const probabilidadeVitoriaNatalia = 0.5;
const probabilidadeVitoriaAndre = 1 - probabilidadeVitoriaNatalia;

const randomNatalia = Math.random();
const randomAndre = Math.random();

if (nataliaAventureira.nivelDaArmadura1 >= andreAventureiro.nivelDaArmadura) {
    console.log(`${nataliaAventureira.nome1}, você tem chance de derrotar o ${andreAventureiro.nome}, acabe com ele usando seu ${nataliaAventureira.poder1}!`);
} else if (randomNatalia < probabilidadeVitoriaNatalia) {
    console.log(`${nataliaAventureira.nome1}, você consegue derrotar o ${andreAventureiro.nome}, acabe com ele usando seu ${nataliaAventureira.poder1}!`);
} else if (randomAndre < probabilidadeVitoriaAndre) {
    console.log(`${nataliaAventureira.nome1}, você vai ser amassada e mandada para o "beleleu" pela ${andreAventureiro.poder} do ${andreAventureiro.nome}... Corra!`);
} else {
    console.log("Vocês são dois pébas, tentem novamente (empate)");
}
```

Neste cenário, calculamos as probabilidades de vitória de Natalia e André com base na variável `probabilidadeVitoriaNatalia`. Com essas probabilidades, comparamos os valores aleatórios gerados para cada aventureiro (`randomNatalia` e `randomAndre`) e definimos o resultado da batalha com base nessas probabilidades.
