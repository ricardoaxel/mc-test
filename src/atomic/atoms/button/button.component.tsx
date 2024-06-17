import {DefaultTheme} from 'styled-components/native';
import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';

import styles from './button.styles';
import {GradientContainer} from '../gradientContainer/gradientContainer.component';

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
}: {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  text: string;
  variantStyles: DefaultTheme;
  customStyles?: StyleProp<ViewStyle>;
  icon?: any;
  disabled?: boolean;
}) => {
  const isGradientButton = variantStyles.type === 'gradient';
  const borderRadius = 4;

  return (
    <Pressable
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
          customExternalStyles={styles.gradientExternalContainer}
          customInternalStyles={variantStyles.button}
          hasShadow={false}>
          <ButtonTextContent style={variantStyles.text} text={text} />
        </GradientContainer>
      ) : (
        <ButtonTextContent style={variantStyles.text} text={text} />
      )}
    </Pressable>
  );
};
