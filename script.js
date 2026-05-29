function mostrarDica(){

  const dicas = [

    "Evitar queimadas ajuda a preservar o solo e diminuir a poluição do ar.",

    "O uso consciente da água na agricultura evita desperdícios e protege os rios.",

    "Plantar árvores próximas às nascentes ajuda na preservação da água.",

    "A tecnologia no campo pode aumentar a produção sem prejudicar o meio ambiente.",

    "A reciclagem de embalagens agrícolas reduz a contaminação da natureza.",

    "A rotação de culturas ajuda a manter o solo fértil e saudável.",

    "O uso de energia solar nas fazendas diminui a emissão de poluentes.",

    "Preservar matas ciliares protege os rios e os animais da região.",

    "Evitar o desperdício de alimentos também ajuda o meio ambiente.",

    "O agro sustentável busca produzir alimentos respeitando a natureza."

  ];

  const numeroAleatorio = Math.floor(Math.random() * dicas.length);

  document.getElementById("dica").innerText =
    dicas[numeroAleatorio];
}
