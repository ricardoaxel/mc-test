import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './cardHiddenNumber.styles';

interface IIconSquare {
  card: string;
  number: string;
  variantStyles?: DefaultTheme;
  customStyles?: StyleProp<ViewStyle>;
}

export const CardHiddenNumber = ({
  card = 'Mastercard',
  number,
  variantStyles,
  customStyles,
}: IIconSquare) => {
  return (
    <View style={[styles.container, customStyles]}>
      <Text style={variantStyles}>{card}</Text>
      <View style={styles.dots}>
        {[...Array(4).keys()].map(el => (
          <Icon size={18} key={el} name="dot-single" />
        ))}
      </View>

      <Text style={variantStyles}>{`${number}`.slice(-4)}</Text>
    </View>
  );
};
