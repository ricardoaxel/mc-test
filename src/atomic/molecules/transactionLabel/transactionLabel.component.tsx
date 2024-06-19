import React from 'react';
import {StyleProp} from 'react-native';
import {ImageSourcePropType, Text, View, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components/native';

import {formatNumberToPrice} from '@utils/utils';
import {RoundedImage} from '@atomic/atoms';

import styles from './transactionLabel.styles';

interface ITransactionLabel {
  image: ImageSourcePropType;
  title: string;
  date: string;
  quantity: number;
  points: number;
  variantStyles: DefaultTheme;
  customStyles?: StyleProp<ViewStyle>;
}

export const TransactionLabel = ({
  image,
  title,
  date,
  quantity,
  points,
  variantStyles,
  customStyles,
}: ITransactionLabel) => {
  return (
    <View style={[styles.container, variantStyles.container, customStyles]}>
      <View
        style={[
          styles.leftContainer,
          {
            gap: variantStyles.listGap,
          },
        ]}>
        <RoundedImage source={image} size={variantStyles.iconSize} />
        <View style={styles.textsGap}>
          <Text style={variantStyles.defaultText}>{title}</Text>
          <Text style={variantStyles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.textsGap}>
        <Text style={variantStyles.defaultText}>
          {formatNumberToPrice(quantity)}
        </Text>
        <Text style={variantStyles.points}>+{points} pts</Text>
      </View>
    </View>
  );
};
