import React, {ComponentType} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components';
import {IconProps} from 'react-native-vector-icons/Icon';

import {Button, GradientIcon} from '@atomic/atoms';

import styles from './dialogContent.styles';

interface IDialogContent {
  Icon: ComponentType<IconProps>;
  iconName: string;
  onExit: () => void;
  title: string;
  description: string;
  actionText: string;
  onAccept: () => void;
  variantStyles: DefaultTheme;
  customStyles?: StyleProp<ViewStyle>;
}

export const DialogContent = ({
  Icon,
  iconName,
  onExit,
  title,
  description,
  actionText,
  onAccept,
  variantStyles,
  customStyles,
}: IDialogContent) => {
  const iconSize = 84;
  return (
    <View
      style={[
        variantStyles.container,
        styles.container,
        customStyles,
        {marginTop: iconSize / 2},
      ]}>
      <View
        style={[
          {
            top: -(iconSize / 2),
            borderColor: variantStyles.container.backgroundColor,
            borderRadius: iconSize,
          },
          styles.iconContainer,
        ]}>
        <GradientIcon
          Icon={Icon}
          name={iconName}
          size={iconSize}
          padding={15}
          border={variantStyles.icon.border}
          variant={'primary'}
          color={variantStyles.icon.color}
          borderRadius={iconSize}
          gradientColors={variantStyles.icon.gradientColors}
        />
      </View>
      <Icon name="close" size={22} style={styles.closeIcon} onPress={onExit} />
      <View style={styles.textsSection}>
        <Text style={[variantStyles.title, styles.title]}>{title}</Text>
        <Text style={[variantStyles.description, styles.description]}>
          {description}
        </Text>
      </View>

      <Button
        text={actionText}
        variantStyles={variantStyles.button}
        customStyles={styles.button}
        onPress={onAccept}
      />
    </View>
  );
};
