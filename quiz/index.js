import entradaDados from "readline-sync";

const perguntas_portugues=[
    {id:1, pergunta:'Qual o jeito certo de se escrever (CHICARA) OU (XICARA) ? ', resposta:'XICARA'},
    {id:2, pergunta:'Qual é a jeito certo de escrever (HASTE) OU (ASTE) ?', resposta:'HASTE'},
    {id:3, pergunta:'Qual é a jeito certo de escrever (CAFE) OU (KAFE) ?', resposta:'CAFE'}
];
const perguntas_fisica=[
    {id:1, pergunta:'Qual a força gravitacional da terra ? (apenas numeros) ', resposta:10},
    {id:2, pergunta:'Quantos minutos os raios solares demora para chegar na terra ? (apenas numeros) ',resposta:8},
    {id:3, pergunta:'Quantas estações tem o ano ? (apenas numeros) ', resposta:4}
];
const perguntas_quimica =[
    {id:1, pergunta:'Quantos hidrogênio tem a composição da agua ?', resposta:2},
    {id:2, pergunta:'Como é chamado a processo de troca de energias pelas plantas? ',reposta:'FOTOSSINTESE'},
    {id:3, pergunta:'Quantos estados a água tem ?(apenas numeros) ', resposta:4}
];
const perguntas_matematica=[
    {id:1, pergunta:'Quanto é 27 + 34 ? ', resposta:61},
    {id:2, pergunta:'Quanto é 35 x 12 ? ', resposta:420},
    {id:3, pergunta:'Quanto é 3 elevado a 5 ?', resposta:243}
];
const perguntas_populares=[
    {id:1, pergunta:'Em que ano foi descoberto o Brasil? ', resposta:1500},
    {id:2, pergunta:'Quais são as cores primárias ? ', resposta:'VERMELHA,AZUL,AMARELO'},
    {id:3, pergunta:'Quantas horas tem um dia? ', resposta:24}
];


console.log("\n ##    Quiz do Tarcisio  ##  \n");

const Nome_Usuario = entradaDados.question('  Bem vindo jogador(a), qual o seu nome ?  ');

console.log(`\n Pronto para testa seus conhecimentos ${Nome_Usuario.toLocaleUpperCase()} ?  ENTÃO LETS BORA !!! \n  `);

console.log(' # Escolha qual o assunto do seu quiz # \n');
console.log(' 1 ) Português');
console.log(' 2 ) Fisica');
console.log(' 3 ) Quimica');
console.log(' 4 ) Matematica');
console.log(' 5 ) Fatos Populares');

let escolha_assunto = entradaDados.question('\n  Qual tema voce quer testar seus conhecimentos ? ');
escolha_assunto = parseInt(escolha_assunto);

switch(escolha_assunto){ 
    case 1:{
        console.log(`\n Voçê escolheu * Português * \n\n Então vamos lá ${Nome_Usuario} !`);
        
        function verificaResposta(perguntas_portugues){
            let respostaUsuario = [];
           
            for(let i=0; i < 3; i++){
                console.log(`${i + 1} - ${array[1].pergunta}`);
                respostaUsuario =entradaDados.question("Resposta: ");
        
                if(Array[i].resposta == respostaUsuario){
               console.log("parabens vc acertou");
                }
            
                else{
                console.log(`resposta errada`);
               }
        };
        };
    break
    }

    case 2:{
        console.log(`  Voçê escolheu Fisíca \n\n Então vamos lá ${Nome_Usuario} !`);
        break;
    }
    case 3:{
        console.log(`  Voçê escolheu Química \n\n Então vamos lá ${Nome_Usuario} !`)
    break
}
case 4:{
    console.log(`\n  Voçê escolheu Matemática \n\n  Então vamos lá ${Nome_Usuario} !`)
    break
}
case 5:{
    console.log(`  Voçê escolheu Fatos Populares \n\n Então vamos lá ${Nome_Usuario} !`)
    break
}
default:{
    console.log("escolha invalida");
    break
}
}
