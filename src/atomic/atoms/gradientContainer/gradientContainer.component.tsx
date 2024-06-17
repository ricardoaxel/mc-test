import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './gradientContainer.styles';
import {GradientColors} from '@utils/interfaces';

enum GradientContainerVariants {
  primary = 'primary',
  secondary = 'secondary',
  noBorder = 'noBorder',
}
type GradientContainerVariantType = `${GradientContainerVariants}`;

interface IGradientContainer {
  children?: React.ReactNode;
  customExternalStyles?: StyleProp<ViewStyle>;
  customInternalStyles?: StyleProp<ViewStyle>;
  variant?: GradientContainerVariantType;
  gradientColors?: GradientColors;
  borderRadius?: number;
  hasShadow?: boolean;
  noBorder?: boolean;
}

/**
 * Reusable GradientContainer for using box with gradient colors
 * primary shows full background and secondary only gradint borders.
 *
 * @component
 */
export const GradientContainer = ({
  children,
  customExternalStyles,
  customInternalStyles,
  variant = 'primary',
  gradientColors = ['purple', 'blue'],
  borderRadius = 10,
  hasShadow = true,
  noBorder = false,
}: IGradientContainer) => {
  const isSecondary = variant === 'secondary';

  return (
    <View
      style={[
        hasShadow && styles.externalContainerShadow,
        {borderRadius},
        customExternalStyles && customExternalStyles,
      ]}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={gradientColors}
        style={[{borderRadius}]}>
        <View
          style={[
            styles.subContiner,
            {borderRadius: borderRadius - 2},
            isSecondary && styles.subContinerSecondary,
            customInternalStyles && customInternalStyles,
            noBorder && styles.noBorder,
          ]}>
          {children}
        </View>
      </LinearGradient>
    </View>
  );
};
