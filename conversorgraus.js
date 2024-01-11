


import conversorCelsius from 'readline-sync';

console.log("conversor de Farenhait para Celsius \n");

let F = conversorCelsius.question("Digite o numero em farenhait para conversão: \n");

let resultado = Number(F) + 20 ;

console.log( F+" farenrait convertido em celsius é "+resultado+"C°.");