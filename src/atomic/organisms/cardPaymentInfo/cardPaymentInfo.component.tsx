import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components/native';

import {TitleWithElement} from '@atomic/molecules';
import {Button} from '@atomic/atoms';
import {formatNumberToPrice} from '@utils/utils';

import styles from './cardPaymentInfo.style';

interface ICardPaymentInfo {
  variantStyles: DefaultTheme;
  customStyles?: StyleProp<ViewStyle>;
  balance: number;
  dueLimitDays: number;
  minimum: number;
}

export const CardPaymentInfo = ({
  variantStyles,
  customStyles,
  balance,
  dueLimitDays,
  minimum,
}: ICardPaymentInfo) => {
  const paymentLabels = [
    {description: 'Statement Balance', value: formatNumberToPrice(balance)},
    {description: 'Minimum Payment', value: formatNumberToPrice(minimum)},
  ];

  return (
    <View style={[styles.container, variantStyles.container, customStyles]}>
      <Text style={variantStyles.title}>
        Payment Due in {dueLimitDays} Days
      </Text>
      <View style={styles.paymentLabels}>
        {paymentLabels.map(({description, value}, index) => (
          <TitleWithElement
            key={description}
            variantStyles={variantStyles.titleWithElement}
            title={description}
            value={value}
            customStyles={
              index !== paymentLabels.length - 1 && styles.titleWithElement
            }
          />
        ))}
      </View>
      <Button
        variantStyles={variantStyles.button}
        customStyles={styles.button}
        text="Make a payment"
        onPress={() => console.log('TODO: Payment made')}
      />
    </View>
  );
};
