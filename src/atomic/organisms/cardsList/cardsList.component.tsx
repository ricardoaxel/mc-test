import React from 'react';
import {ScrollView, View} from 'react-native';

import styles from './cardsList.styles';

enum Disposition {
  vertical = 'vertical',
  horizontal = 'horizontal',
}
type DispositionType = `${Disposition}`;

interface ICardsList {
  width: number;
  height: number;
  visibleColumnsNumber: number;
  visiblesRowsNumber: number;
  gap: number;
  internalPaddingHorizontal?: number;
  internalPaddingVertical?: number;
  disposition?: DispositionType;
  cards: any;
}

/**
 * Reusable CardsList component for rendering cards in a scrollable grid layout.
 * - Make shure that the width and height are less than your device screen **
 * - internalPaddingHorizontal and internalPaddingVertical helps in case your cards has
 * shadows.
 *
 * @component
 * @example
 * return (
 *   <CardsList
 *      width={300}
 *      height={450}
 *      name={name}
 *      visibleColumnsNumber={3}
 *      visiblesRowsNumber={4}
 *      internalPaddingHorizontal= 20;
 *      internalPaddingVertical= 30;
 *      gap={20}
 *      disposition='horizontal'
 *  />
 * )
 */
export const CardsList = ({
  width,
  height,
  visibleColumnsNumber,
  visiblesRowsNumber,
  gap,
  internalPaddingHorizontal = 0,
  internalPaddingVertical = 0,
  disposition = Disposition.vertical,
  cards,
}: ICardsList) => {
  const sizeCalculationWithoutGap = (size: number, elementsNumer: number) =>
    size / elementsNumer - (gap * (elementsNumer - 1)) / elementsNumer;

  const hasVerticalScroll = disposition === Disposition.vertical;
  const cardWidth = sizeCalculationWithoutGap(
    width - internalPaddingHorizontal * 2,
    visibleColumnsNumber,
  );
  const cardHeight = sizeCalculationWithoutGap(
    height - internalPaddingVertical * 2,
    visiblesRowsNumber,
  );

  return (
    <View
      style={{
        maxWidth: width,
        maxHeight: height,
        marginVertical: -internalPaddingVertical,
      }}>
      <ScrollView
        style={[
          hasVerticalScroll
            ? {...styles.flexDirectionColumn}
            : {...styles.flexDirectionRow},
        ]}
        contentContainerStyle={[
          styles.scrollViewContentContainerStyle,
          hasVerticalScroll
            ? {...styles.flexDirectionRow}
            : {...styles.flexDirectionColumn},
          {
            gap: gap,
          },
          {paddingHorizontal: internalPaddingHorizontal},
          {paddingVertical: internalPaddingVertical},
        ]}>
        {cards.map(
          ({Comp, props}: any, index: React.Key | null | undefined) => (
            <View
              key={index}
              style={{
                height: cardHeight,
                width: cardWidth,
              }}>
              <Comp {...props} />
            </View>
          ),
        )}
      </ScrollView>
    </View>
  );
};
