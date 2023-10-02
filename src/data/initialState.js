import yellowCake from '../assets/images/yellowCake.png';
import chocoBrownie from '../assets/images/chocoBrownie.png';
import shu from '../assets/images/littleShu.png';
import cart from '../assets/images/cart.svg';
import pizza from '../assets/images/margarita.png';
export const initialState = [
  {
    id: 1,
    link: 'cakes',
    title: 'Торты',
    products: [
      {
        id: 1,
        title: 'Муссовый торт "Манго-маракуйя"',
        cartCount: 0,
        cartPrice: 0,
        price: 1200,
        image: {
          src: yellowCake,
          alt: 'cake',
        },
        weight: '3кг',
        cart: cart,
        kind: '',
        decor: '',
        heft: '',
      },

      {
        id: 2,
        title: 'Муссовый торт "Манго-маракуйя"',
        cartCount: 0,
        cartPrice: 0,
        price: 1200,
        image: {
          src: yellowCake,
          alt: 'cake',
        },
        weight: '3кг',
        cart: cart,
      },

      {
        id: 3,

        title: 'Муссовый торт "Манго-маракуйя"',
        cartCount: 0,
        cartPrice: 0,
        price: 1200,
        image: {
          src: yellowCake,
          alt: 'cake',
        },
        weight: '3кг',
        cart: cart,
      },
      {
        id: 4,
        title: 'Муссовый торт "Манго-маракуйя"',
        cartCount: 0,
        cartPrice: 0,
        price: 1200,
        image: {
          src: yellowCake,
          alt: 'cake',
        },
        weight: '3кг',
        cart: cart,
      },
      {
        id: 5,
        title: 'Муссовый торт "Манго-маракуйя"',
        cartCount: 0,
        cartPrice: 0,
        price: 1200,
        image: {
          src: yellowCake,
          alt: 'cake',
        },
        weight: '3кг',
        cart: cart,
      },
      {
        id: 6,
        title: 'Муссовый торт "Манго-маракуйя"',
        cartCount: 0,
        cartPrice: 0,
        price: 1200,
        image: {
          src: yellowCake,
          alt: 'cake',
        },
        weight: '3кг',
        cart: cart,
      },
    ],
  },
  {
    id: 2,
    link: 'brownie',
    title: 'Пирожное',
    products: [
      {
        id: 7,
        title: 'Шоколадное пирожное',
        cartCount: 0,
        cartPrice: 0,
        price: 300,
        image: {
          src: chocoBrownie,
          alt: 'brownie',
        },
        weight: '3шт',
        cart: cart,
      },
      {
        id: 8,
        title: 'Шоколадное пирожное',
        cartCount: 0,
        cartPrice: 0,
        price: 300,
        image: {
          src: chocoBrownie,
          alt: 'brownie',
        },
        weight: '3шт',
        cart: cart,
      },
      {
        id: 9,
        title: 'Шоколадное пирожное',
        cartCount: 0,
        cartPrice: 0,
        price: 300,
        image: {
          src: chocoBrownie,
          alt: 'brownie',
        },
        weight: '3шт',
        cart: cart,
      },
      {
        id: 10,
        title: 'Шоколадное пирожное',
        cartCount: 0,
        cartPrice: 0,
        price: 300,
        image: {
          src: chocoBrownie,
          alt: 'brownie',
        },
        weight: '3шт',
        cart: cart,
      },
      {
        id: 11,
        title: 'Шоколадное пирожное',
        cartCount: 0,
        cartPrice: 0,
        price: 300,
        image: {
          src: chocoBrownie,
          alt: 'brownie',
        },
        weight: '3шт',
        cart: cart,
      },
      {
        id: 12,
        title: 'Шоколадное пирожное',
        cartCount: 0,
        cartPrice: 0,
        price: 300,
        image: {
          src: chocoBrownie,
          alt: 'brownie',
        },
        weight: '3шт',
        cart: cart,
      },
    ],
  },
  {
    id: 3,
    link: 'shu',
    title: 'Шу',
    products: [
      {
        id: 13,
        title: 'Пирожное Шу',
        cartCount: 0,
        cartPrice: 0,
        price: 400,
        image: {
          src: shu,
          alt: 'shu',
        },
        weight: '6шт',
        cart: cart,
      },
      {
        id: 14,
        title: 'Пирожное Шу',
        cartCount: 0,
        cartPrice: 0,
        price: 400,
        image: {
          src: shu,
          alt: 'shu',
        },
        weight: '6шт',
        cart: cart,
      },
      {
        id: 15,
        title: 'Пирожное Шу',
        cartCount: 0,
        cartPrice: 0,
        price: 400,
        image: {
          src: shu,
          alt: 'shu',
        },
        weight: '6шт',
        cart: cart,
      },
      {
        id: 16,
        title: 'Пирожное Шу',
        cartCount: 0,
        cartPrice: 0,
        price: 400,
        image: {
          src: shu,
          alt: 'shu',
        },
        weight: '6шт',
        cart: cart,
      },
      {
        id: 17,
        title: 'Пирожное Шу',
        cartCount: 0,
        cartPrice: 0,
        price: 400,
        image: {
          src: shu,
          alt: 'shu',
        },
        weight: '6шт',
        cart: cart,
      },
      {
        id: 18,
        title: 'Пирожное Шу',
        cartCount: 0,
        cartPrice: 0,
        price: 400,
        image: {
          src: shu,
          alt: 'shu',
        },
        weight: '6шт',
        cart: cart,
      },
    ],
  },
  {
    id: 4,
    link: 'pizza',
    title: 'Пицца',
    products: [
      {
        id: 19,
        title: 'Пицца Маргарита',
        cartCount: 0,
        cartPrice: 0,
        price: 800,
        image: {
          src: pizza,
          alt: 'pizza',
        },
        weight: '1кг',
        cart: cart,
      },
      {
        id: 20,
        title: 'Пицца Маргарита',
        cartCount: 0,
        cartPrice: 0,
        price: 800,
        image: {
          src: pizza,
          alt: 'pizza',
        },
        weight: '1кг',
        cart: cart,
      },
      {
        id: 21,
        title: 'Пицца Маргарита',
        cartCount: 0,
        cartPrice: 0,
        price: 800,
        image: {
          src: pizza,
          alt: 'pizza',
        },
        weight: '1кг',
        cart: cart,
      },
      {
        id: 22,
        title: 'Пицца Маргарита',
        cartCount: 0,
        cartPrice: 0,
        price: 800,
        image: {
          src: pizza,
          alt: 'pizza',
        },
        weight: '1кг',
        cart: cart,
      },
      {
        id: 23,
        title: 'Пицца Маргарита',
        cartCount: 0,
        cartPrice: 0,
        price: 800,
        image: {
          src: pizza,
          alt: 'pizza',
        },
        weight: '1кг',
        cart: cart,
      },
      {
        id: 24,
        title: 'Пицца Маргарита',
        cartCount: 0,
        cartPrice: 0,
        price: 800,
        image: {
          src: pizza,
          alt: 'pizza',
        },
        weight: '1кг',
        cart: cart,
      },
    ],
  },
];