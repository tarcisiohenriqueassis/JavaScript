const dataUltimoAcesso = new Date('2023/10/1 17:00:00');
const dataAtual = new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferençaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 *60;
const milissegundosDia = milissegundosHora * 24;

let msg = "";

if(hora < 6 || hora >= 18){
    msg = "Boa noite tarcisio, seu gostoso !";
}
else if(hora >= 6 && hora < 12){
    msg = "Bom dia tarcisio, seu gostoso!";
}
else{
    msg="Boa tarde tarcisio, seu gostoso!";
}

if(diferençaTime > milissegundosDia){
    msg+="Voce esta ausente ha dias!!"
}
else if(diferençaTime > milissegundosHora){
    msg+="voce esta ausente ha horas!!"
}
else{
    msg+="que bom que ainda esta aqui!!"
}
console.log(msg);