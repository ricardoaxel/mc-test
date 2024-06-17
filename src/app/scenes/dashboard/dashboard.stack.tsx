import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingDashboardScreen from './dashboard.screen';

export type DashboardRoutes = {
  Dashboard: undefined;
};

const Stack = createStackNavigator<DashboardRoutes>();

export const DashboardStack = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={OnboardingDashboardScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
