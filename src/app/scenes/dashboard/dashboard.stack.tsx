import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';

import {getHeaderBackground} from '@atomic/molecules';

import {BottomTabStack} from './bottomTabs.stack';
import CardControlsScreen from './cardControls/cardControls.screen';
import TransactionsScreen from './screens/transactions/transactions.screen';

export type DashboardRoutes = {
  Cards: undefined;
  ['Card Controls']: undefined;
  Transactions: {id: number};
};

const Stack = createStackNavigator<DashboardRoutes>();

export const DashboardStack = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Cards"
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.primary,
          height: 90,
        },
        headerTitleContainerStyle: {
          justifyContent: 'flex-end',
          paddingBottom: 5,
        },
        headerTintColor: 'white',
        headerTitleStyle: theme.texts.headers,
        headerBackground: () => getHeaderBackground(theme.gradientColors),
      }}>
      <Stack.Screen
        name="Cards"
        component={BottomTabStack}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.primary,
            height: 90,
          },
          headerTitleContainerStyle: {
            justifyContent: 'flex-end',
            paddingBottom: 5,
          },
          headerTintColor: 'white',
          headerTitleStyle: theme.texts.headers,
          headerBackground: () => getHeaderBackground(theme.gradientColors),
        }}
      />
      <Stack.Screen
        name="Card Controls"
        component={CardControlsScreen}
        options={{}}
      />
      <Stack.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
};
