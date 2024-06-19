import React from 'react';
import {Image, View, Text} from 'react-native';
import {DefaultTheme} from 'styled-components/native';

import {FACE_ID} from '@assets/images';
import {AlertModal} from '@atomic/molecules';

import styles from './faceID.styles';

interface IRoundedImage {
  visible: boolean;
  variantStyles: DefaultTheme;
}

export const FaceID = ({visible, variantStyles}: IRoundedImage) => {
  return (
    <AlertModal visible={visible} customStyles={styles.container}>
      <View style={[styles.imageContainer, variantStyles.container, ,]}>
        <Image source={FACE_ID} style={styles.image} />
        <Text style={variantStyles.text}>Face ID</Text>
      </View>
    </AlertModal>
  );
};
