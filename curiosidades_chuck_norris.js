var curiosidades_chuck_norris = [

    {titulo:"Cuidado com a higiene bucal",                    conteudo:"carries sao terriveis"},
    {titulo: "Teste de glicose sao importantes" ,             conteudo:"metades dos brasileiros morrem de diabetes"},
    {titulo: "gasolina é canserigena",                        conteudo:"sempre mantenha as maos longe desse produto"},
    {titulo: "sempre tome agua a desidatracao mata" ,         conteudo: "sempre carregue uma garrafinha de agua"},
    {titulo: "sempre tome banho para q tenha um higiene",     conteudo:"sempre lave as partes mais de uma vez"},
    {titulo: "sempre usei pasta dental",                      conteudo:"sempre lave a escova primeiro"}
]  

var tamanho_colecao = curiosidades_chuck_norris.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];
var  titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("curiosidades sobre chuck norris");
console.log("titulo:"+titulo_curiosidade);
console.log("conteudo:"+conteudo_curiosidade);
