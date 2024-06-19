import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components/native';

import {TitleWithElement} from '@atomic/molecules';
import {ProgressBar} from '@atomic/atoms';
import {formatNumberToPrice} from '@utils/utils';

import styles from './cardBalance.style';

interface ICardBalance {
  variantStyles: DefaultTheme;
  customStyles?: StyleProp<ViewStyle>;
  total: number;
  available: number;
}

export const CardBalance = ({
  variantStyles,
  customStyles,
  total,
  available,
}: ICardBalance) => {
  const balanceNumber = total - available;
  const balanceLabels = [
    {description: 'Available Credit:', value: available},
    {description: 'Total Credit Limit:', value: total},
  ];

  const currentBalance = formatNumberToPrice(balanceNumber);

  return (
    <View style={[styles.container, variantStyles.container, customStyles]}>
      <TitleWithElement
        variantStyles={variantStyles.titleWithElement}
        title={currentBalance}
        value="Current Balance"
      />
      <ProgressBar
        maxValue={total}
        actualValue={available}
        customStyles={styles.progressBar}
      />
      <View style={styles.balanceLabels}>
        {balanceLabels.map(({description, value: totalPrice}) => (
          <View key={description} style={styles.balanceLabel}>
            <Text style={variantStyles.text}>{description}</Text>
            <Text style={variantStyles.text}>
              {formatNumberToPrice(totalPrice)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};
