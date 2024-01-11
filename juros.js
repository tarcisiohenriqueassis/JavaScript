

import entrada from 'readline-sync';
var juros = 0.15;

console.log("\nCalculadora de juros")

let emprestimo = entrada.question("Digite o valor desejado: ");

if(emprestimo >= 1){
    
   var resultado = juros * emprestimo;

    console.log("o juros sera de "+resultado);
}
else{
    console.log("numero invalido");
};


