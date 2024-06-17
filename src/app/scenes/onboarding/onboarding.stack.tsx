import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from './onboarding.screen';

export type OnboardingRoutes = {
  OnboardingMain: undefined;
};

const Stack = createStackNavigator<OnboardingRoutes>();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="OnboardingMain">
      <Stack.Screen
        name="OnboardingMain"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
