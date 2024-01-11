import entradaDados from "readline-sync";

console.log("\nEscolha uma das alternativas: \n");
console.log("1 -Listar o histórico do salário mínimo");
console.log("2 -Listar o histórico da taxa IPCA (inflação) ");
console.log("3 -Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)ect");

const colecao_arrays = [
    {ano:2012, salario_minimo:430.00, ipca:5.9},
    {ano:2013, salario_minimo:510.00, ipca:6.1},
    {ano:2014, salario_minimo:610.00, ipca:5.4},
    {ano:2015, salario_minimo:750.00, ipca:5.9},
    {ano:2016, salario_minimo:850.00, ipca:6.4},
    {ano:2017, salario_minimo:900.00, ipca:6.3},
    {ano:2018, salario_minimo:950.00, ipca:6.2},
    {ano:2019, salario_minimo:1050.00, ipca:4.9},
    {ano:2020, salario_minimo:1150.00, ipca:3.7},
    {ano:2021, salario_minimo:1200.00, ipca:4.3},
    {ano:2022, salario_minimo:1350.00, ipca:4.5},
    {ano:2023, salario_minimo:1400.00, ipca:5.1}
];
let escolha = entradaDados.question("\nDigite o numero da sua  escolha: ");
 escolha = parseInt(escolha);
 console.log(`\nOpção escolhida: ${escolha}`);

 switch(escolha) {
    case 1:{      
   
    let tamanho_array = colecao_arrays.length;
    
    console.log("\nLista de historico de salários de 2012 à 2023 \n");

    for(let i = 0; i < tamanho_array;i++){
    
        let ano_array = colecao_arrays[i].ano;
        let salario_array = colecao_arrays[i].salario_minimo;
    
        console.log(`ano: ${ano_array}`);
        console.log(`Salário minimo ${salario_array},00\n`);
        
        break;
    }
    
}  
    case 2:{

        let tamanho_array = colecao_arrays.length;

        console.log("\n Lista de taxas de inflação  de 2012 á 2023 \n");

        for(let i=0;i<tamanho_array;i++){

            let ano = colecao_arrays[i].ano;
            let ipca = colecao_arrays[i].ipca;

            console.log(`Ano: ${ano} ${"------"} inflação ${ipca}%`);
        }
        break;
    }
    case 3:{
        
        console.log("\nLista de porcentagem de crescimento salarial com a inflação(IPCA)\n");

        let tamanho_array = colecao_arrays.length;
        
      for(let i = 0;i < tamanho_array;i++){    
        let contadorAnt = i == 0 ? 0 : i -1; 
        let ano = colecao_arrays[i].ano;
        let ipca = colecao_arrays[i].ipca;
        let salario = colecao_arrays[i].salario_minimo;
        let anterior = colecao_arrays[contadorAnt].salario_minimo;
        let crescimento = (salario / anterior)*100;

        console.log(`Ano: ${ano} ----- Salário: ${salario} ----- Inflação: ${ipca} ----- Crescimento Salarial: ${crescimento.toFixed(1)}`);
        }
        break;
    }
    default:{
        console.log("Opção invalida!");
    
  
    break;
}
}
 
      
