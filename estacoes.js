let meteoros_trimeste_um ="*Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03";
let meteoros_trimeste_dois="**Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06";
let meteoros_trimeste_tres = "***Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 03/06\nBootídeos de Junho começa em 16/06 e termina em 20/07";
let meteoros_trimeste_quatro = "****Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 5555";

let data_atual = new Date();
let mes_atual = data_atual.getMonth();


if(mes_atual == 0 || mes_atual == 1|| mes_atual == 2){

console.log("as chuvas de meteoros sao dia 15/7  e dias".padStart(70,".")+meteoros_trimeste_um);
}
else if(mes_atual == 3 || mes_atual == 4 || mes_atual == 5){
        
console.log("as chuvas de meteoros sao entre "+meteoros_trimeste_dois);
}
else if(mes_atual == 6 || mes_atual == 7 || mes_atual == 8){

console.log("as chuvas de meteoros sao entre ".padEnd(30,".")+meteoros_trimeste_tres);
}
else if(mes_atual == 9 || mes_atual == 10||mes_atual==11){

console.log("as chuvas de meteorito sao marcadas para "+meteoros_trimeste_quatro);
}
else{
    console.log("n existe evento marcado para essa data.");
}