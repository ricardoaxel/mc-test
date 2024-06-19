import {
  AMAZON_LOGO,
  DUNKIN_DONUTS_LOGO,
  NETFLIX_LOGO,
  SPOTIFY_LOGO,
  STARBUCKS_LOGO,
  UBER_LOGO,
} from '@assets/images';
import {IServiceProviders} from './interfaces';

export const serviceProviders: IServiceProviders = {
  netflix: {
    id: 'netflix',
    name: 'Netflix',
    image: NETFLIX_LOGO,
    color: '#e50813',
  },
  spotify: {
    id: 'spotify',
    name: 'Spotify',
    image: SPOTIFY_LOGO,
    color: '#1ED760',
  },
  uberEats: {
    id: 'uberEats',
    name: 'Uber Eats',
    image: UBER_LOGO,
    color: '#03C36A',
  },
  starbucks: {
    id: 'starbucks',
    name: 'Starbucks',
    image: STARBUCKS_LOGO,
    color: '#00643C',
  },
  amazon: {
    id: 'amazon',
    name: 'Amazon',
    image: AMAZON_LOGO,
    color: '#FF9507',
  },
  dunkinDonuts: {
    id: 'dunkinDonuts',
    name: 'Dunkin Donuts',
    image: DUNKIN_DONUTS_LOGO,
    color: '#EC4698',
  },
} as const;
