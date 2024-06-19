import React, {ComponentType} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {IconProps} from 'react-native-vector-icons/Icon';
import {GradientColors} from '@utils/interfaces';

import {GradientContainer} from '../gradientContainer/gradientContainer.component';

import styles from './gradientIcon.styles';

enum GradientIconVariants {
  primary = 'primary',
  secondary = 'secondary',
}
type GradientIconVariantType = `${GradientIconVariants}`;

interface IGradientIcon {
  size?: number;
  padding?: number;
  border?: number;
  variant?: GradientIconVariantType;
  Icon: ComponentType<IconProps>;
  name: string;
  borderRadius?: number;
  gradientColors?: GradientColors;
  color?: string;
  customStyles?: StyleProp<ViewStyle>;
}

export const GradientIcon = ({
  size = 80,
  padding = 10,
  border = 4,
  variant = 'secondary',
  Icon,
  name,
  borderRadius = 10,
  gradientColors = ['red', 'blue'],
  color = 'blue',
}: IGradientIcon) => {
  const isPrimary = variant === 'primary';

  if (isPrimary) {
    const iconSize = size - padding * 2;
    return (
      <GradientContainer
        gradientColors={gradientColors}
        variant={'primary'}
        borderRadius={borderRadius}
        customExternalStyles={[{width: size, height: size}]}
        customInternalStyles={[
          {padding},
          styles.primaryGradientContainerInternal,
        ]}
        hasShadow={false}>
        <Icon name={name} color={color} size={iconSize} />
      </GradientContainer>
    );
  } else {
    const paddingWithoudBorder = padding - border;
    const iconSize = size - border * 2 - paddingWithoudBorder * 2;

    return (
      <View
        style={{
          width: size,
          height: size,
        }}>
        <MaskedView
          style={styles.secondaryMaskedView}
          maskElement={
            <View
              style={[
                {
                  borderWidth: border,
                  borderRadius: borderRadius,
                  width: size,
                },
                styles.secondaryContainer,
              ]}>
              <Icon name={name} size={iconSize} />
            </View>
          }>
          <LinearGradient
            colors={gradientColors}
            style={styles.secondaryGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          />
        </MaskedView>
      </View>
    );
  }
};
