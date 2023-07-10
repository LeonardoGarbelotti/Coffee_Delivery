import {
  Americano,
  Arabe,
  CafeComLeite,
  CafeGelado,
  Capuccino,
  ChocolateQuente,
  Cubano,
  Expresso,
  ExpressoCremoso,
  Havaiano,
  Irlandes,
  Latte,
  Macchiato,
  Mochaccino
} from '../assets/coffees'

export const coffees = [
  {
    id: 1,
    image: Expresso,
    tags: [
      'tradicional',
    ],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 5.90,
  },
  {
    id: 2,
    image: Americano,
    tags: [
      'tradicional',
    ],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 6.90,
  },
  {
    id: 3,
    image: ExpressoCremoso,
    tags: [
      'tradicional',
    ],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
  },
  {
    id: 4,
    image: CafeGelado,
    tags: [
      'tradicional',
      'gelado'
    ],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 5.90,
  },
  {
    id: 5,
    image: CafeComLeite,
    tags: [
      'tradicional',
      'com leite',
    ],
    name: 'Café Com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 7.90,
  },
  {
    id: 6,
    image: Latte,
    tags: [
      'tradicional',
      'com leite',
    ],
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
  },
  {
    id: 7,
    image: Capuccino,
    tags: [
      'tradicional',
      'com leite',
    ],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 11.99,
  },
  {
    id: 8,
    image: Macchiato,
    tags: [
      'tradicional',
      'com leite',
    ],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 11.99,
  },
  {
    id: 9,
    image: Mochaccino,
    tags: [
      'tradicional',
      'com leite',
    ],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 13.99,
  },
  {
    id: 10,
    image: ChocolateQuente,
    tags: [
      'especial',
      'com leite'
    ],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
  },
  {
    id: 11,
    image: Cubano,
    tags: [
      'especial',
      'alcoólico',
      'gelado'
    ],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
  },
  {
    id: 12,
    image: Havaiano,
    tags: [
      'especial',
    ],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
  },
  {
    id: 13,
    image: Arabe,
    tags: [
      'especial',
    ],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
  },
  {
    id: 14,
    image: Irlandes,
    tags: [
      'especial',
      'alcoólico',
    ],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
  },
]