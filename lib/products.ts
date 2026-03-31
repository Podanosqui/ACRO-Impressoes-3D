export interface Product {
  id: number
  name: string
  description: string
  fullDescription: string
  price: number
  category: string[]
  image: string
}

export const categories = [
  "Todos",
  "Decoração",
  "Utilidades",
  "Geek",
  "Suporte",
  "Personalizados",
  "Marca Página",
] as const

export type Category = (typeof categories)[number]

export const products: Product[] = [
  {
    id: 1,
    name: "Busto Cavaleiro da Lua",
    description: "Figura decorativa pintada a mão.",
    fullDescription: "Busto do personagem da Marvel Cavaleiro da Lua, pintado a mão. Material resistente e acabamento detalhado. Altura: aproximadamente 16cm. Perfeito para fãs de quadrinhos e decoração geek.",
    price: 75.00,
    category: ["Geek", "Decoração", "Personalizados"],
    image: "/produtos/busto-cavaleiro-da-lua.png"
  },
  {
    id: 2,
    name: "Carrinho de Fórmula 1",
    description: "Carrinho decorativo inspirado em carros de Fórmula 1, pintado a mão",
    fullDescription: "Carrinho decorativo inspirado em carros de Fórmula 1, pintado a mão. Material resistente e acabamento detalhado. Dimensões: 15cm x 10cm x 8cm.",
    price: 55.00,
    category: ["Decoração", "Personalizados"],
    image: "/produtos/carro-f1.png"
  },
  {
    id: 3,
    name: "Figura Cavalo",
    description: "Miniatura de um cavalo com pose e base reforçada.",
    fullDescription: "Miniatura de um cavalo com pose dinâmica e base reforçada para estabilidade. Material resistente e acabamento detalhado.",
    price: 35.00,
    category: ["Decoração"],
    image: "/produtos/cavalo.png"
  },
  {
    id: 4,
    name: "Chaveiro BTS",
    description: "Chaveiro com design do grupo BTS",
    fullDescription: "Chaveiro decorativo com o design do grupo BTS. Material resistente e acabamento detalhado. Tamanho: 6cm.",
    price: 10.00,
    category: ["Personalizados"],
    image: "/produtos/chaveiro-bts.png"
  },
  {
    id: 5,
    name: "Chaveiro Homem Aranha",
    description: "Chaveiro com design do Homem Aranha",
    fullDescription: "Chaveiro decorativo com o design do Homem Aranha. Material resistente e acabamento detalhado. Pintado a mão Tamanho: 5cm.",
    price: 12.00,
    category: ["Personalizados", "Geek"],
    image: "/produtos/chaveiro-spider-man.png"
  },
  {
    id: 6,
    name: "Dragão Articulado",
    description: "Dragão flexível com articulações móveis superdetalhado",
    fullDescription: "Dragão flexível com articulações móveis superdetalhado. Material resistente e acabamento detalhado. Tamanho: 40cm.",
    price: 35.00,
    category: ["Geek", "Decoração"],
    image: "/produtos/dragao-articulado.png"
  },
  {
    id: 7,
    name: "Hornet - Hollow Knight",
    description: "Figura decorativa da personagem Hornet do jogo Hollow Knight",
    fullDescription: "Figura decorativa da personagem Hornet do jogo Hollow Knight. Material resistente e acabamento detalhado. Altura: aproximadamente 15cm. Perfeita para fãs de jogos e decoração geek. Aproximadamente 19cm de altura.",
    price: 28.00,
    category: ["Decoração", "Geek"],
    image: "/produtos/hornet.png"
  },
  {
    id: 8,
    name: "Kombi - Sob Medida",
    description: "Réplica de Kombi personalizada para decoração, pintada a mão",
    fullDescription: "Réplica de Kombi personalizada para decoração, pintada a mão. Material resistente e acabamento detalhado. Feito sob medida para atender as preferências do cliente.",
    price: 100.00,
    category: ["Decoração"],
    image: "/produtos/kombi.png"
  },
  {
    id: 9,
    name: "Marca Página Simples",
    description: "Diversos modelos de marca página decorativos para amantes de leitura",
    fullDescription: "Escolha entre diversos modelos de marca página decorativos para amantes de leitura. Material resistente e acabamento detalhado. Tamanhos personalizados. Perfeito para presentear ou para uso pessoal.",
    price: 10.00,
    category: ["Utilidades", "Marca Página"],
    image: "/produtos/marca-pagina-simples.png"
  },
  {
    id: 10,
    name: "Marca Página Star Wars",
    description: "Marca página decorativo com design inspirado em Star Wars",
    fullDescription: "Marca página decorativo com design inspirado em Star Wars. Material resistente e acabamento detalhado. Tamanho personalizado.",
    price: 12.00,
    category: ["Geek", "Utilidades", "Marca Página"],
    image: "/produtos/marca-pagina-star-wars.png"
  },
  {
    id: 11,
    name: "Marca Página Premium",
    description: "Modelos especiais de marca página decorativos para amantes de leitura, com design exclusivo e acabamento premium",
    fullDescription: "Modelos especiais de marca página decorativos para amantes de leitura, com design exclusivo e acabamento premium. Material resistente e detalhes sofisticados. Tamanhos personalizados. Perfeito para presentear ou para uso pessoal.",
    price: 15.00,
    category: ["Personalizados", "Utilidades", "Marca Página"],
    image: "/produtos/marca-pagina.png"
  },
  {
    id: 12,
    name: "Nave Swordfish - Cowboy Bebop",
    description: "Figura decorativa da nave Swordfish do anime Cowboy Bebop",
    fullDescription: "Figura decorativa da nave Swordfish do anime Cowboy Bebop. Material resistente e acabamento detalhado.",
    price: 55.00,
    category: ["Decoração"],
    image: "/produtos/nave-cowboy-bebop.jpg"
  },
  {
    id: 13,
    name: "Organizador de Cotonete + Algodão",
    description: "Organizador de cotonete e algodão para uso pessoal",
    fullDescription: "Organizador de cotonete e algodão para uso pessoal. Material resistente e acabamento detalhado.",
    price: 19.00,
    category: ["Utilidades"],
    image: "/produtos/organizador-cotonete-algodao.png"
  },
  {
    id: 14,
    name: "Enfeite de Pássaro",
    description: "Enfeite de pássaro para decoração",
    fullDescription: "Enfeite de pássaro para decoração. Material resistente e acabamento detalhado.",
    price: 20.00,
    category: ["Decoração"],
    image: "/produtos/passaro.png"
  },
  {
    id: 15,
    name: "Porta Chá",
    description: "Suporte prático e decorativo para organizar seus chás.",
    fullDescription: "Suporte prático e decorativo para organizar seus chás. Material resistente e acabamento detalhado.",
    price: 50.00,
    category: ["Utilidades"],
    image: "/produtos/porta-cha.png"
  },
  {
    id: 16,
    name: "Porta Esponja",
    description: "Suporte prático e decorativo para organizar suas esponjas.",
    fullDescription: "Suporte prático e decorativo para organizar suas esponjas. Material resistente e acabamento detalhado.",
    price: 17.00,
    category: ["Utilidades"],
    image: "/produtos/porta-esponja.png"
  },
  {
    id: 17,
    name: "Punpun - Boa noite Punpun",
    description: "Enfeite decorativo do personagem Punpun, do mangá 'Boa noite Punpun'",
    fullDescription: "Enfeite decorativo do personagem Punpun, do mangá 'Boa noite Punpun'. Material resistente e acabamento detalhado.",
    price: 25.00,
    category: ["Decoração", "Geek"],
    image: "/produtos/punpun.png"
  },
  {
    id: 18,
    name: "Suporte para controle - Cristal",
    description: "Suporte prático e decorativo para organizar seus controles.",
    fullDescription: "Suporte prático e decorativo para organizar seus controles. Material resistente e acabamento detalhado.",
    price: 25.00,
    category: ["Suporte", "Decoração"],
    image: "/produtos/suporte-controle-cristal.png"
  },
  {
    id: 19,
    name: "Suporte para controle - Polvo",
    description: "Suporte prático e decorativo para organizar seus controles.",
    fullDescription: "Suporte prático e decorativo para organizar seus controles. Material resistente e acabamento detalhado.",
    price: 25.00,
    category: ["Suporte", "Decoração"],
    image: "/produtos/suporte-controle-ps4-polvo.png"
  },
  {
    id: 20,
    name: "Suporte para Cubo Mágico",
    description: "Suporte prático e decorativo para organizar seus cubos mágicos.",
    fullDescription: "Suporte prático e decorativo para organizar seus cubos mágicos. Material resistente e acabamento detalhado.",
    price: 9.00,
    category: ["Suporte"],
    image: "/produtos/suporte-cubo-magico.png"
  },
  {
    id: 21,
    name: "Suporte para Fone de Ouvido Minimalista",
    description: "Suporte prático e decorativo para organizar seus fones de ouvido.",
    fullDescription: "Suporte prático e decorativo para organizar seus fones de ouvido. Material resistente e acabamento detalhado.",
    price: 15.00,
    category: ["Suporte"],
    image: "/produtos/suporte-fone.png"
  },
  {
    id: 22,
    name: "Suporte para Papel Higiênico - Shawn o Carneiro",
    description: "Suporte prático e decorativo para organizar seu papel higiênico.",
    fullDescription: "Suporte prático e decorativo para organizar seu papel higiênico. Material resistente e acabamento detalhado.",
    price: 15.00,
    category: ["Suporte", "Decoração"],
    image: "/produtos/suporte-papel.png"
  },
  {
    id: 23,
    name: "Suporte para PS2 Slim",
    description: "Suporte prático e decorativo para organizar seu PS2 Slim.",
    fullDescription: "Suporte prático e decorativo para organizar seu PS2 Slim. Material resistente e acabamento detalhado.",
    price: 15.00,
    category: ["Suporte", "Decoração"],
    image: "/produtos/suporte-ps2.png"
  },
  {
    id: 24,
    name: "Troféu diversos tipos",
    description: "Troféu decorativo para diversas ocasiões.",
    fullDescription: "Troféu decorativo para diversas ocasiões. Material resistente e acabamento detalhado.",
    price: 10.00,
    category: ["Decoração"],
    image: "/produtos/trofeu.png"
  },
]


export const WHATSAPP_NUMBER = "5535991102911"

export function getWhatsAppLink(productName: string, price?: number): string {
  const message = encodeURIComponent(
    `Olá! Tenho interesse no *${productName}*${price ? ` (R$ ${price})` : ""} e gostaria de fazer um pedido. Ele ainda está disponível?`
  )

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}
