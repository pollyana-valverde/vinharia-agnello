export const produtosLista = [
    {
        id: crypto.randomUUID(),
        tags: {
            destaque: true,
            safra: "2018",
        },
        image: "../assets/images/agnello-especial.png",
        badges: {
            wine_type: "Tinto seco",
            grape_type: "Cabernet Sauvignon",
        },
        name: "Agnello Reserva Especial",
        description: "Nosso vinho mais prestigioso, orgulhosamente envelhecido em barris de carvalho francês por 24 meses. Ele apresenta notas intensas de frutas vermelhas escuras, baunilha, café e um leve toque de especiarias no final. Estruturado e encorpado, é um vinho que evolui belamente na taça.",
        price: 150.00,
    },
    {
        id: crypto.randomUUID(),
        tags: {
            destaque: false,
            safra: "2020",
        },
        image: "../assets/images/agnello-classico.png",
        badges: {
            wine_type: "Tinto seco",
            grape_type: "Merlot",
        },
        name: "Agnello Clássico",
        description: "Um vinho redondo, com taninos macios e acidez equilibrada. Traz aromas frutados que lembram ameixas e cerejas negras, com sutil toque de cacau. Perfeito para o dia a dia e para iniciar os estudos no mundo dos vinhos tintos.",
        price: 90.00,
    },
    {
        id: crypto.randomUUID(),
        tags: {
            destaque: true,
            safra: "2021",
        },
        image: "../assets/images/agnello-blanc.png",
        badges: {
            wine_type: "Branco Seco",
            grape_type: "Chardonnay",
        },
        name: "Agnello Blanc",
        description: "Vinho branco elegante e refrescante, com aromas de frutas tropicais como abacaxi e maracujá, além de um toque amanteigado devido a uma rápida passagem por madeira. Acidez viva e final persistente.",
        price: 85.00,
    },
    {
        id: crypto.randomUUID(),
        tags: {
            destaque: false,
            safra: "2022",
        },
        image: "../assets/images/agnello-rose.png",
        badges: {
            wine_type: "Rosé Seco",
            grape_type: "Syrah",
        },
        name: "Agnello Rosé",
        description: "Um rosé vibrante e delicado, com notas de morango fresco, framboesa e um leve toque floral. Traz frescor ao paladar, sendo uma escolha maravilhosa para os dias mais quentes.",
        price: 75.00,
    },
    {
        id: crypto.randomUUID(),
        tags: {
            destaque: false,
            safra: "2021",
        },
        image: "../assets/images/agnello-brut.png",
        badges: {
            wine_type: "Espumante",
            grape_type: "Pinot Noir / Chardonnay",
        },
        name: "Agnello Espumante Brut",
        description: "Produzido pelo método tradicional (Champenoise), com perlage fina e persistente. Aromas complexos de pão tostado, maçã verde e amêndoas. Na boca é cremoso, elegante e com excelente acidez.",
        price: 110.00,
    },
    {
        id: crypto.randomUUID(),
        tags: {
            destaque: true,
            safra: "2019",
        },
        image: "../assets/images/agnello-malbec.png",
        badges: {
            wine_type: "Tinto seco",
            grape_type: "Malbec",
        },
        name: "Agnello Malbec Ouro",
        description: "Um Malbec intenso e sedutor, cultivado nas partes mais altas dos nossos vinhedos. Apresenta uma cor púrpura profunda e notas de ameixa madura, mirtilo e um toque de chocolate amargo derivado do carvalho.",
        price: 125.00,
    },
]