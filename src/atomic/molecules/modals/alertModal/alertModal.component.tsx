import React from 'react';
import {Modal, StyleProp, View, ViewStyle} from 'react-native';

import styles from './alertModal.styles';

interface IBottomModal {
  visible: boolean;
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}

export const AlertModal = ({visible, children, customStyles}: IBottomModal) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={[styles.container, customStyles]}>{children}</View>
    </Modal>
  );
};
