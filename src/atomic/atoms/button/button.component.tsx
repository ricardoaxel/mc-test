import {DefaultTheme} from 'styled-components/native';
import React from 'react';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';

import {GradientContainer} from '../gradientContainer/gradientContainer.component';

import styles from './button.styles';

const ButtonTextContent = ({
  style,
  text,
}: {
  style: DefaultTheme;
  text: string;
}) => {
  return <Text style={style}>{text}</Text>;
};

export const Button = ({
  onPress,
  text,
  variantStyles,
  customStyles,
  disabled,
  icon,
  customInternalStyles,
}: {
  onPress: () => void;
  text: string;
  variantStyles: DefaultTheme;
  customStyles?: StyleProp<ViewStyle>;
  customInternalStyles?: StyleProp<ViewStyle>;
  icon?: any;
  disabled?: boolean;
}) => {
  const isGradientButton = variantStyles.type === 'gradient';
  const borderRadius = 4;

  return (
    <TouchableOpacity
      style={[
        customStyles,
        !isGradientButton && {...styles.solidStyles, ...variantStyles.button},
        {borderRadius},
      ]}
      disabled={disabled}
      onPress={onPress}>
      {isGradientButton ? (
        <GradientContainer
          gradientColors={variantStyles.gradientColors}
          variant={variantStyles.variant}
          borderRadius={borderRadius}
          customExternalStyles={[styles.gradientExternalContainer]}
          customInternalStyles={[variantStyles.button, customInternalStyles]}
          hasShadow={false}>
          {icon}
          <ButtonTextContent
            style={[variantStyles.text, icon && styles.iconMargin]}
            text={text}
          />
        </GradientContainer>
      ) : (
        <ButtonTextContent style={variantStyles.text} text={text} />
      )}
    </TouchableOpacity>
  );
};
