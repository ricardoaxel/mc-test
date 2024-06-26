import {
  AMAZON_LOGO,
  CARD_ORANGE,
  CARD_WHITE,
  DUNKIN_DONUTS_LOGO,
  NETFLIX_LOGO,
  SPOTIFY_LOGO,
  STARBUCKS_LOGO,
  UBER_LOGO,
} from '@assets/images';

import {ICardsInfo} from './interfaces';

export const cardsInfo: ICardsInfo = {
  0: {
    cardType: 'Mastercard',
    name: 'John A. Doe',
    number: '5426 1234 5678 1234',
    cardImage: CARD_ORANGE,
    expirationDate: '09/25',
    cvc: '242',
    totalCreditLimit: 10000,
    available: 9000,
    dueLimitDays: 5,
    statementBalance: 600,
    minimumPayment: 60,
    transactions: [
      {
        id: '0',
        image: STARBUCKS_LOGO,
        title: 'Starbucks',
        date: '2021-10-12 08:23AM',
        quantity: 5.43,
        points: 5,
      },
      {
        id: '1',
        image: AMAZON_LOGO,
        title: 'Amazon',
        date: '2021-10-11 04:03PM',
        quantity: 20.7,
        points: 20,
      },
      {
        id: '2',
        image: DUNKIN_DONUTS_LOGO,
        title: 'Dunkin Donuts',
        date: '2021-10-11 11:11AM',
        quantity: 6.93,
        points: 6,
      },
      {
        id: '3',
        image: NETFLIX_LOGO,
        title: 'Netflix',
        date: '2021-10-10 11:04PM',
        quantity: 4.3,
        points: 4,
      },
      {
        id: '4',
        image: SPOTIFY_LOGO,
        title: 'Spotify',
        date: '2021-10-09 11:11AM',
        quantity: 2.5,
        points: 2,
      },
      {
        id: '5',
        image: AMAZON_LOGO,
        title: 'Amazon',
        date: '2021-10-09 11:11AM',
        quantity: 30.1,
        points: 30,
      },
      {
        id: '6',
        image: UBER_LOGO,
        title: 'Uber Eats',
        date: '2021-10-08 05:03PM',
        quantity: 6.21,
        points: 6,
      },
      {
        id: '7',
        image: STARBUCKS_LOGO,
        title: 'Starbucks',
        date: '2021-10-07 08:23AM',
        quantity: 3.41,
        points: 3,
      },

      {
        id: '8',
        image: DUNKIN_DONUTS_LOGO,
        title: 'Dunkin Donuts',
        date: '2021-10-06 11:11AM',
        quantity: 2.7,
        points: 2,
      },
      {
        id: '9',
        image: AMAZON_LOGO,
        title: 'Amazon',
        date: '2021-10-05 04:03PM',
        quantity: 8.23,
        points: 8,
      },
      {
        id: '10',
        image: NETFLIX_LOGO,
        title: 'Netflix',
        date: '2021-10-04 11:04PM',
        quantity: 5.33,
        points: 5,
      },

      {
        id: '11',
        image: UBER_LOGO,
        title: 'Uber Eats',
        date: '2021-10-03 05:03PM',
        quantity: 6.7,
        points: 6,
      },
    ],
  },
  1: {
    cardType: 'Mastercard',
    name: 'John A. Doe',
    number: '5426 2424 1728 0997',
    cardImage: CARD_WHITE,
    expirationDate: '02/27',
    cvc: '873',
    totalCreditLimit: 23000,
    available: 1000,
    dueLimitDays: 12,
    statementBalance: 1800,
    minimumPayment: 580,
    transactions: [
      {
        id: '0',
        image: NETFLIX_LOGO,
        title: 'Netflix',
        date: '2021-10-11 11:04PM',
        quantity: 5.43,
        points: 5,
      },
      {
        id: '1',
        image: DUNKIN_DONUTS_LOGO,
        title: 'Dunkin Donuts',
        date: '2021-10-09 11:11AM',
        quantity: 4.56,
        points: 4,
      },
      {
        id: '2',
        image: UBER_LOGO,
        title: 'Uber Eats',
        date: '2021-10-08 05:03PM',
        quantity: 7.3,
        points: 6,
      },
      {
        id: '3',
        image: STARBUCKS_LOGO,
        title: 'Starbucks',
        date: '2021-10-07 08:23AM',
        quantity: 7.4,
        points: 7,
      },
      {
        id: '4',
        image: AMAZON_LOGO,
        title: 'Amazon',
        date: '2021-10-06 04:03PM',
        quantity: 24.74,
        points: 24,
      },
      {
        id: '5',
        image: DUNKIN_DONUTS_LOGO,
        title: 'Dunkin Donuts',
        date: '2021-10-05 11:11AM',
        quantity: 3.38,
        points: 3,
      },
    ],
  },
} as const;

export const cardsDisplay = Object.values(cardsInfo).map(
  ({name, cardImage}) => ({
    name,
    cardImage,
  }),
);
