const carrinho = [
    {  nome: 'The Legend of Zelda', qnt: 2, valor: 250 },
    {  nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
    {  nome: 'New Super Mario Bros.', qnt: 1, valor: 250 }
  ];
  
  function imprimirItem( produto, index ) {
    let texto = index +1+ ' - ';
    texto += produto.qnt + ' UN - ';
    texto += produto.nome + ' - ';
    texto += 'R$ ' + produto.valor + ' - ';
    texto += 'R$ ' + produto.qnt * produto.valor;
    console.log( texto );
  }
  
  carrinho.forEach(imprimirItem);
  