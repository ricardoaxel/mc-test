import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Button, RoundedImage} from '@atomic/atoms';
import {InputLabel} from '@atomic/molecules';
import {IServiceProvider} from '@utils/interfaces';

import styles from './connectService.style';

enum ConnectServiceFormInputIds {
  userName = 'userName',
  password = 'password',
}

type ConnectServiceFormInputIdsType = `${ConnectServiceFormInputIds}`;

interface IConnectServiceFormInput {
  id: ConnectServiceFormInputIdsType;
  label: string;
  secureText: boolean;
}

interface IConnectService {
  onRequestClose: () => void;
  actualSelection: IServiceProvider;
  onConnectService: () => void;
}

export const ConnectService = ({
  onRequestClose,
  actualSelection: {image, name, color},
  onConnectService,
}: IConnectService) => {
  const theme = useTheme();
  //TODO: Add validations and improve form controland reusability.
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const completedInputs = Object.values(formData).every(el => el !== '');
  const formInputs: IConnectServiceFormInput[] = [
    {
      id: 'userName',
      label: 'User Name',
      secureText: false,
    },
    {
      id: 'password',
      label: 'Password',
      secureText: true,
    },
  ];

  const updateFormData = (
    text: string,
    key: ConnectServiceFormInputIdsType,
  ) => {
    setFormData({...formData, [key]: text});
  };

  return (
    <View style={styles.container}>
      <View style={[styles.serviceColorIndicator, {backgroundColor: color}]} />
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onRequestClose}>
          <Icon name="close" size={22} />
        </TouchableOpacity>
        <RoundedImage source={image} size={80} />
        <Text style={[theme.texts.titles]}>Connect {name}</Text>
        <View style={styles.form}>
          {formInputs.map(({id, label, secureText}) => (
            <InputLabel
              key={id}
              label={label}
              variantStyles={theme.inputs.inputLabelPrimary}
              secureText={secureText}
              value={formData[id]}
              onChange={text => updateFormData(text, id)}
            />
          ))}
        </View>
        <Text style={[theme.texts.labels, {textAlign: 'center'}]}>
          By clicking the button below, you agree to the Terms and Conditions
          for connecting your Spotify account.
        </Text>
        <Button
          customStyles={{width: '100%'}}
          onPress={onConnectService}
          variantStyles={
            completedInputs
              ? theme.buttons.alter.socialBig
              : theme.buttons.alter.disabledBig
          }
          text="Connect"
          disabled={!completedInputs}
        />
      </View>
    </View>
  );
};
