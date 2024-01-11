import entradaDados from "readline-sync";

console.log("Calculadora de impar ou par\n");

let numeros = entradaDados.question("digite o numero: ");

numeros = parseInt(numeros);

    if(numeros % 2 == 0){
      
        console.log(numeros+" é par");
    }
    else{
        console.log(numero+" é impar");
    }


