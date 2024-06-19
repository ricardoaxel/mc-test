import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {DefaultTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './inputLabel.styles';

interface IInputLabel {
  variantStyles: DefaultTheme;
  value: string;
  onChange: ((text: string) => void) | undefined;
  label?: string;
  secureText?: boolean;
  placeholder?: string;
}

export const InputLabel = ({
  variantStyles,
  label,
  value,
  onChange,
  secureText = false,
  placeholder,
}: IInputLabel) => {
  const [secureTextEntry, setSecureTextEntry] = useState(secureText);

  const toggleSecureText = () => setSecureTextEntry(!secureTextEntry);

  return (
    <View style={styles.container}>
      {label && <Text style={variantStyles.label}>{label}</Text>}
      <View style={[styles.inputContainer, variantStyles.input]}>
        <TextInput
          style={[styles.inputStyle, variantStyles.inputText]}
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />
        {secureText && (
          <TouchableOpacity onPress={toggleSecureText}>
            {secureTextEntry ? (
              <Icon
                name="eye-outline"
                color={variantStyles.inputText}
                size={24}
              />
            ) : (
              <Icon
                name="eye-off-outline"
                color={variantStyles.inputText}
                size={24}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
