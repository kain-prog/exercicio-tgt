// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {

// K = K + 1;

// SOMA = SOMA + K;

// }

// imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?

// R:.

console.log('Resposta Questão 1 ---------------');

let INDICE = 13;
let SOMA = 0;
let K = 0;

while(K < INDICE){
    SOMA += K
    K++
    console.log(SOMA);
}



// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// R:.

console.log('Resposta Questão 2 ---------------');

seq = [0, 1]

for(let i = 2; i < 13; i++){
    seq[i] = seq[i - 2] + seq[i - 1];   
}

const result = seq.find(e => e === 5);

if(result <= 0 || undefined){
    console.log('O número informado não pertence a sequencia do fibo');
}
else{
    console.log('O número informado pertence a sequência do fibo');
}

console.log(seq, result);




// 3) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, ___ 9;

// b) 2, 4, 8, 16, 32, 64, ____ 128;

// c) 0, 1, 4, 9, 16, 25, 36, ____ 49;

// d) 4, 16, 36, 64, ____ 100;

// e) 1, 1, 2, 3, 5, 8, ____ 13;

// f) 2, 10, 12, 16, 17, 18, 19, ____ 200;



// 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, 
// a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se 
// cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

// IMPORTANTE:

// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

// c) Explique como chegou no resultado.

// R:. Os dois, pois os dois estarão na mesma distância em relação a cidade de Ribeirão Preto no ponto de cruzamento.

 

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;

// R:.

console.log('Resposta Questão 5 ---------------');

function inverterStr(str) {
    let res = '',
        length = str.length;
    while (length--) {
        res += str[length];
    }
    return res;
}

console.log(inverterStr('String Invertida'));