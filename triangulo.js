import Triangulo from 'readline-sync';

console.log("\n Area do triângulo \n");

let base = Triangulo.question("informe a base: \n");

let altura = Triangulo.question("Informe a altura: \n");

let area = (base * altura)/2;

console.log("Você digitou a base: "+base+"\n")
console.log("Você digitou a altura "+altura+"\n")

console.log("A  aréa do triângulo é "+area+".\n");