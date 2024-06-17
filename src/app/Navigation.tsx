import React, {ReactElement} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';

import {GradientContainer} from '@atomic/atoms';
import {GradientColors} from '@utils/interfaces';

import {OnboardingStack} from './scenes/onboarding/onboarding.stack';

export type RootRoutes = {
  Dashboard: undefined;
  Onboarding: undefined;
};

const Stack = createStackNavigator<RootRoutes>();

const HeaderBackground = ({
  gradientColors,
}: {
  gradientColors: GradientColors;
}) => {
  return (
    <GradientContainer
      gradientColors={gradientColors}
      customExternalStyles={styles.gradientContainerStyles}
      customInternalStyles={styles.gradientContainerStyles}
      borderRadius={0}
      hasShadow={false}
    />
  );
};

const getHeaderBackground = (gradientColors: GradientColors) => (
  <HeaderBackground gradientColors={gradientColors} />
);

function Navigation(): ReactElement {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
            height: 90,
          },
          headerTitleContainerStyle: {
            justifyContent: 'flex-end',
            paddingBottom: 5,
          },
          headerTitleStyle: {...theme.texts.headers},
          headerBackground: () => getHeaderBackground(theme.gradientColors),
        }}
        initialRouteName="Dashboard">
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  gradientContainerStyles: {width: '100%', height: '100%'},
});

export default Navigation;
