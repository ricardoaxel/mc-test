import React from 'react';
import {Image, View} from 'react-native';
import {useTheme} from 'styled-components';

import {ADD_TO_APPLE_WALLET} from '@assets/images';
import {TitleWithElement} from '@atomic/molecules';
import {Button} from '@atomic/atoms';

import styles from './cardDetails.style';

interface ICardDetails {
  number: string;
  expirationDate: string;
  cvc: string;
}

export const CardDetails = ({number, expirationDate, cvc}: ICardDetails) => {
  const theme = useTheme();
  const {padding} = theme;

  return (
    <View
      style={[
        {
          paddingHorizontal: padding,
          gap: padding,
        },
        styles.cardConfidential,
      ]}>
      <Image
        source={ADD_TO_APPLE_WALLET}
        resizeMode={'contain'}
        style={[styles.addToWallet, {marginBottom: padding / 2}]}
      />
      <TitleWithElement
        title="Card Number"
        value={number}
        variantStyles={theme.components.titleWithElement}
      />
      <View
        style={[
          {
            borderBottomColor: theme.colors.separator,
          },
          styles.innerSeparator,
        ]}
      />
      <View style={styles.bottomGroupCardConfidential}>
        <TitleWithElement
          title="Expiration Date"
          value={expirationDate}
          variantStyles={theme.components.titleWithElement}
        />
        <View
          style={[
            styles.columnSeparator,
            {
              marginHorizontal: padding * 2,
              borderRightColor: theme.colors.separator,
            },
          ]}
        />
        <TitleWithElement
          title="CVC"
          value={cvc}
          variantStyles={theme.components.titleWithElement}
        />
      </View>

      <Button
        variantStyles={theme.buttons.main.secondaryBig}
        customStyles={styles.button}
        text="Copy Card Number"
        onPress={() => console.log('TODO: Copy card name')}
      />
    </View>
  );
};
