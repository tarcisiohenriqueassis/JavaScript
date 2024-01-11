var frase_do_dia = [
   
    "Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão.",
    "Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!",
    "Apreciando cada passo, mas já sonhando com as próximas conquistas!",
    "Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.",
    "Acorde todas as manhãs com um sorriso. Esta é mais uma oportunidade que você tem para ser feliz. Seja seu próprio motor de ignição. O dia de hoje jamais voltará .... Não o desperdice!!!",
    "Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores!",
    "Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!",
    "É importante agradecer pelo hoje sem nunca desistir do amanhã!",
    "A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!",
    "Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!",
    "Cada dia traz uma nova oportunidade para cultivar a gratidão e lutar pelo que se quer!",
    "A gratidão é uma grande aliada do sucesso!",
    "Só tenho gratidão por tudo o que enfrentei até chegar aqui. E também muita esperança no coração por todos os desafios que ainda virão!",
    "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
    "Faça sempre o seu melhor!",
    "Não espere, ponha em prática!",
    "Mesmo que pareça difícil, não pare!",
    "Só trabalhando é possível trilhar o caminho! ",
    "Tenha coragem!",
    "Comece onde você está, use o que você tem e faça o que você pode.",
    "Não importa que você vá devagar, contanto que você não pare.",
    "A inspiração existe, porém temos que encontrá-la trabalhando.",
    "Coragem é saber o que não temer.",
    "Acredite em milagres, mas não dependa deles.",
    "Não é a carga que o derruba, mas a maneira como você a carrega.",
    "A felicidade não é algo pronto. Ela é feita das suas próprias ações.",
    "Mude o modo que você olha para as coisas, e as coisas que você olha mudarão.",
    "Um homem criativo é motivado pelo desejo de alcançar, não pelo desejo de vencer os outros.",
    "Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo.",
    "A paz vem de dentro de você mesmo. Não a procure à sua volta.",
    "Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro."

];
var data_atual = new Date();

var numero_escolhido = data_atual.getDate();

console.log("O numero escolhido foi "+numero_escolhido);
numero_escolhido--;

var frase_escolhida = frase_do_dia[numero_escolhido];

console.log("Frase do Dia:");
console.log(frase_escolhida);
