import React from 'react';
import {
  StyleProp,
  ViewStyle,
  LayoutAnimation,
  ImageSourcePropType,
} from 'react-native';
import {useTheme} from 'styled-components/native';
import Carousel from 'react-native-reanimated-carousel';

import {CardContainer} from '@atomic/molecules';

import styles from './cardSelector.style';

interface ICard {
  cardImage: ImageSourcePropType;
  name: string;
}

interface ICardSelector {
  customStyles?: StyleProp<ViewStyle>;
  onChangeCard: (index: any) => void;
  currentCardIndex: number;
  cards: ICard[];
  width: number;
  height: number;
  cardsControls: any;
}

export const CardSelector = ({
  cards,
  customStyles,
  onChangeCard,
  currentCardIndex,
  width,
  height,
  cardsControls,
}: ICardSelector) => {
  const theme = useTheme();
  return (
    <Carousel
      loop={false}
      width={width}
      height={height}
      data={[...new Array(2).keys()]}
      scrollAnimationDuration={0}
      style={[styles.carousel, customStyles]}
      onSnapToItem={index => {
        LayoutAnimation.spring();
        onChangeCard(index);
      }}
      renderItem={({index}) => (
        <CardContainer
          image={cards[index].cardImage}
          name={cards[index].name}
          isBlocked={cardsControls[index].cardLocked}
          variantStyles={theme.components.cardContainer}
          customStyles={currentCardIndex !== index && styles.cardContainer}
          detailsOpen={cardsControls[index].showCardDetails}
        />
      )}
    />
  );
};
