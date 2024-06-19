import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components/native';
import {StyleProp} from 'react-native';

import styles from './titleWithElement.styles';

interface ITitleWithElement {
  title: string;
  value: string;
  variantStyles: DefaultTheme;
  customStyles?: StyleProp<ViewStyle>;
}

export const TitleWithElement = ({
  title,
  value,
  variantStyles,
  customStyles,
}: ITitleWithElement) => {
  return (
    <View style={[styles.container, variantStyles.container, customStyles]}>
      <Text style={variantStyles.title}>{title}</Text>
      <Text style={variantStyles.value}>{value}</Text>
    </View>
  );
};
