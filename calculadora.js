import entradaDados from "readline-sync";

console.log("Calculadora de matematica");

let contador = 0; 

let numero_calculo = entradaDados.question("Digite o numero para o calculo: ");

numero_calculo = parseInt(numero_calculo);

console.log("Calculadora de "+numero_calculo);

while(contador <= 10){
    
    let resultado = numero_calculo * contador;
  
     console.log(numero_calculo+" x "+contador+" = "+resultado );
    
     contador++
};
