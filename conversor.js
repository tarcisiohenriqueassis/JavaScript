
import conversor from 'readline-sync';

console.log("conversão de milhas para km: ");

let mi = conversor.question("Digite o numero para conversão: ");

let km = mi / 0.62137;

console.log(mi+" milhas equivale a "+km+" kilometros");


