import React from 'react';
import {DimensionValue, StyleProp, View, ViewStyle} from 'react-native';

import styles from './progressBar.styles';

interface IProgressBar {
  maxValue: number;
  actualValue: number;
  customStyles?: StyleProp<ViewStyle>;
}

export const ProgressBar = ({
  maxValue,
  actualValue,
  customStyles,
}: IProgressBar) => {
  const barPercentage: DimensionValue | undefined = `${
    100 - (actualValue / maxValue) * 100
  }%`;

  return (
    <View style={[styles.container, customStyles]}>
      <View
        style={[
          {
            width: barPercentage,
          },
          styles.progress,
        ]}
      />
    </View>
  );
};
