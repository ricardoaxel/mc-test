import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styles from './bottomModal.styles';

interface IBottomModal {
  visible: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

export const BottomModal = ({
  visible,
  onRequestClose,
  children,
}: IBottomModal) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPressOut={onRequestClose}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <KeyboardAvoidingView
              behavior={'position'}
              style={styles.modalView}>
              {children}
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
