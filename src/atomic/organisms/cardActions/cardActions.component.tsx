import React, {ComponentType} from 'react';
import {View, Text, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import {DefaultTheme} from 'styled-components/native';
import {IconProps} from 'react-native-vector-icons/Icon';

import styles from './cardActions.style';

import {GradientIcon} from '@atomic/atoms';

interface ICardActionInfo {
  Icon: ComponentType<IconProps>;
  iconName: string;
  name: string;
  isActive: boolean;
  id: string;
}

interface ICardActions {
  variantStyles: DefaultTheme;
  cardActionsInfo: ICardActionInfo[];
  customStyles?: StyleProp<ViewStyle>;
  onPressAction: (name: string) => void;
}

export const CardActions = ({
  variantStyles,
  customStyles,
  cardActionsInfo,
  onPressAction,
}: ICardActions) => {
  return (
    <View style={[styles.container, customStyles]}>
      {cardActionsInfo.map(({Icon, iconName, name, isActive, id}) => (
        <TouchableOpacity
          onPress={() => onPressAction(id)}
          key={name}
          style={styles.cardAction}>
          <GradientIcon
            Icon={Icon}
            name={iconName}
            size={variantStyles.icon.size}
            padding={variantStyles.icon.padding}
            border={variantStyles.icon.border}
            variant={isActive ? 'primary' : 'secondary'}
            color={variantStyles.icon.color}
            borderRadius={variantStyles.icon.borderRadius}
            gradientColors={variantStyles.icon.gradientColors}
          />
          <Text style={[variantStyles.text]}>{name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
