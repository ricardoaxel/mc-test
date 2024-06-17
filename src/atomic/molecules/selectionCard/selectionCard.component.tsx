import React from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  Pressable,
  View,
} from 'react-native';
import {DefaultTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Button, GradientContainer, RoundedImage} from '@atomic/atoms';

import styles from './selectionCard.styles';

interface SelectionCardI {
  image: ImageSourcePropType;
  isSelected?: boolean;
  variantStyles: DefaultTheme;
  customStyles?: any;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

export const SelectionCard = ({
  image,
  isSelected = false,
  variantStyles,
  onPress,
}: SelectionCardI) => {
  return (
    <Pressable onPress={onPress}>
      <GradientContainer
        variant={'secondary'}
        noBorder={!isSelected}
        gradientColors={variantStyles.gradientColors}
        customInternalStyles={styles.gradientContainer}>
        <View style={styles.container}>
          {isSelected && (
            <Icon
              name="check-circle"
              color={variantStyles.check}
              size={24}
              style={styles.check}
            />
          )}
          <RoundedImage source={image} />
          <Button
            onPress={onPress}
            variantStyles={
              isSelected
                ? variantStyles.buttons.main.primary
                : variantStyles.buttons.main.secondary
            }
            customStyles={[styles.button, isSelected && styles.selectedButton]}
            text={isSelected ? 'Connected' : 'Connect'}
          />
        </View>
      </GradientContainer>
    </Pressable>
  );
};
