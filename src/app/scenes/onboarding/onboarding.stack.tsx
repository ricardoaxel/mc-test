import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';

import {getHeaderBackground} from '@atomic/molecules';

import OnboardingScreen from './screens/onboarding.screen';
import styles from './onboarding.stack.style';

export type OnboardingRoutes = {
  Onboarding: undefined;
  DashboardStack: {screen: string};
};

const Stack = createStackNavigator<OnboardingRoutes>();

export const OnboardingStack = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
          ...styles.headerStyle,
        },
        headerTitleContainerStyle: styles.headerTitleContainerStyle,
        headerTitleStyle: {...theme.texts.headers},
        headerBackground: () => getHeaderBackground(theme.gradientColors),
      }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </Stack.Navigator>
  );
};
