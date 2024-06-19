import React, {ComponentType} from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components/native';
import InternalIcon from 'react-native-vector-icons/Octicons';
import {IconProps} from 'react-native-vector-icons/Icon';

import {GradientIcon} from '@atomic/atoms';

import styles from './goToDetailLabel.styles';

interface IGoToDetailLabel {
  variantStyles: DefaultTheme;
  customStyles?: StyleProp<ViewStyle>;
  Icon?: ComponentType<IconProps>;
  iconName?: string;
  title: string;
  status: string;
  onPressAction?: () => void;
}

export const GoToDetailLabel = ({
  variantStyles,
  customStyles,
  Icon,
  iconName,
  title,
  status,
  onPressAction,
}: IGoToDetailLabel) => {
  return (
    <View style={[styles.container, variantStyles.container, customStyles]}>
      <View style={[styles.leftContainer, {gap: variantStyles.listGap}]}>
        {Icon && iconName && (
          <GradientIcon
            size={variantStyles.icon.size}
            padding={variantStyles.icon.padding}
            border={variantStyles.icon.border}
            variant={'secondary'}
            Icon={Icon}
            name={iconName}
            borderRadius={variantStyles.icon.borderRadius}
            gradientColors={variantStyles.icon.gradientColors}
          />
        )}
        <Text style={[variantStyles.title]}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={onPressAction}
        style={[styles.rightContainer, {gap: variantStyles.listGap}]}>
        <Text style={[variantStyles.status]}>{status}</Text>
        <InternalIcon
          name="chevron-right"
          size={22}
          color={variantStyles.goToIcon.color}
        />
      </TouchableOpacity>
    </View>
  );
};
