import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {OnboardingStack} from './scenes/onboarding/onboarding.stack';
import {DashboardStack} from './scenes/dashboard/dashboard.stack';

export type RootRoutes = {
  OnboardingStack: undefined;
  DashboardStack: undefined;
};

const Stack = createStackNavigator<RootRoutes>();

function Navigation(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="OnboardingStack">
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
        <Stack.Screen name="DashboardStack" component={DashboardStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
