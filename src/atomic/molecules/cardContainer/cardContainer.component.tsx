import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DefaultTheme} from 'styled-components/native';

import styles from './cardContainer.styles';

interface ICardContainer {
  name: string;
  image: ImageSourcePropType;
  variantStyles: DefaultTheme;
  isBlocked?: boolean;
  detailsOpen?: boolean;
  customStyles?: StyleProp<ViewStyle>;
}

export const CardContainer = ({
  name,
  image,
  isBlocked,
  customStyles,
  variantStyles,
  detailsOpen,
}: ICardContainer) => {
  return (
    <View style={[styles.container, customStyles]}>
      <Image source={image} style={styles.image} resizeMode={'center'} />
      <Text style={[styles.name, variantStyles.name]}>{name}</Text>
      {isBlocked && (
        <View
          style={[
            styles.blockedContainer,
            detailsOpen ? styles.noPadding : styles.blockedPadding,
          ]}>
          <Icon name="lock" size={20} style={variantStyles.icon} />
          <Text style={variantStyles.blockedMessage}>
            Your card has been temporarily locked
          </Text>
        </View>
      )}
    </View>
  );
};
