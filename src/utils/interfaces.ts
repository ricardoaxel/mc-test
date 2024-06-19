import {ImageSourcePropType} from 'react-native';
import {serviceProviders} from './constants';

export type GradientColors = (string | number)[];

export type ServiceProviderKeyType = keyof typeof serviceProviders;

export interface IServiceProvider {
  id: ServiceProviderKeyType;
  name: string;
  image: ImageSourcePropType;
  color: string;
}

export interface IServiceProviders {
  [key: string]: IServiceProvider;
}

export interface ITransaction {
  id: string;
  image: ImageSourcePropType;
  title: string;
  date: string;
  quantity: number;
  points: number;
}
export interface ICardsInfo {
  [key: number]: {
    cardType: string;
    name: string;
    number: string;
    cardImage: ImageSourcePropType;
    expirationDate: string;
    cvc: string;
    totalCreditLimit: number;
    available: number;
    dueLimitDays: number;
    statementBalance: number;
    minimumPayment: number;
    transactions: ITransaction[];
  };
}
