import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';

import {DashboardRoutes} from './dashboard.stack';
import styles from './dashboard.screen.style';

type ScreenProps = StackScreenProps<DashboardRoutes, 'Dashboard'>;

const DashboardScreen: FC<ScreenProps> = ({navigation}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text>DASHBOARD</Text>
    </View>
  );
};

export default DashboardScreen;
