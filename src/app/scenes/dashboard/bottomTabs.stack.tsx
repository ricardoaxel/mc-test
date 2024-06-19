import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {GradientIcon} from '@atomic/atoms';
import {EmptyPage} from '@atomic/atoms/emptyPage/emptyPage';
import {getHeaderBackground} from '@atomic/molecules';

import DashboardScreen from './screens/dashboard/dashboard.screen';

const Tab = createBottomTabNavigator();

export const BottomTabStack = ({}: any) => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {height: 84},
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'Dashboard':
              if (focused) {
                return (
                  <GradientIcon
                    Icon={Icon}
                    name="home"
                    variant="secondary"
                    color="white"
                    border={0}
                    padding={0}
                    size={24}
                    gradientColors={theme.gradientColors}
                  />
                );
              } else {
                return <Icon color="grey" size={24} name="home" />;
              }
            case 'Rewards':
              if (focused) {
                return (
                  <GradientIcon
                    Icon={Icon}
                    name="gift-open"
                    variant="secondary"
                    color="white"
                    border={0}
                    padding={0}
                    size={24}
                    gradientColors={theme.gradientColors}
                  />
                );
              } else {
                return <Icon color="grey" size={24} name="gift-open" />;
              }

            case 'PFM':
              if (focused) {
                return (
                  <GradientIcon
                    Icon={Icon}
                    name="finance"
                    variant="secondary"
                    color="white"
                    border={0}
                    padding={0}
                    size={24}
                    gradientColors={theme.gradientColors}
                  />
                );
              } else {
                return <Icon color="grey" size={24} name="finance" />;
              }

            case 'More':
              if (focused) {
                return (
                  <GradientIcon
                    Icon={Icon}
                    name="more"
                    variant="secondary"
                    color="white"
                    border={0}
                    padding={0}
                    size={24}
                    gradientColors={theme.gradientColors}
                  />
                );
              } else {
                return <Icon color="grey" size={24} name="more" />;
              }
          }
        },
        tabBarLabelStyle: [{...theme.texts.defaultSecondary, fontSize: 12}],
      })}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Rewards"
        component={EmptyPage}
        options={{tabBarLabel: 'Rewards'}}
      />
      <Tab.Screen
        name="PFM"
        component={EmptyPage}
        options={{tabBarLabel: 'PFM'}}
      />
      <Tab.Screen
        name="More"
        component={EmptyPage}
        options={{tabBarLabel: 'More'}}
      />
    </Tab.Navigator>
  );
};
