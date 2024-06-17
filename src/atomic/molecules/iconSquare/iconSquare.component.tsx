import React from 'react';
import {Text, View} from 'react-native';

import {DefaultTheme} from 'styled-components/native';

import styles from './iconSquare.styles';

interface IIconSquare {
  variantStyles: DefaultTheme;
  icon: any;
  text: string;
}

export const IconSquare = ({variantStyles, icon, text}: IIconSquare) => {
  const {Comp, props} = icon;
  return (
    <View style={[styles.container, variantStyles.container]}>
      <Comp size={props.size} style={props.style} name={props.name} />
      <Text style={[variantStyles.text]}>{text}</Text>
    </View>
  );
};
