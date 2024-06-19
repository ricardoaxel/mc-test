import React, {FC} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'styled-components';

import {Button} from '@atomic/atoms';
import {GoToDetailLabel} from '@atomic/molecules';

import {DashboardRoutes} from '../dashboard.stack';
import {generalOptions, userPreferencesOptions} from './constants';
import styles from './cardControls.styles';

type ScreenProps = StackScreenProps<DashboardRoutes, 'Card Controls'>;

const CardControlsScreen: FC<ScreenProps> = ({}) => {
  const theme = useTheme();
  const {padding} = theme;
  const width = Dimensions.get('window').width;
  const generalOptionsData = generalOptions(theme);

  return (
    <ScrollView>
      <View
        style={[
          styles.cardsContainer,
          {
            paddingVertical: padding / 1.1,
            gap: padding / 1.5,
            flexWrap: 'wrap',
          },
        ]}>
        {generalOptionsData.map(({text, id, icon}) => {
          return (
            <Button
              key={id}
              customStyles={{width: width / 2 - padding * 1.5}}
              variantStyles={{
                ...theme.buttons.main.secondary,
                button: styles.cardButton,
                text: {
                  ...theme.buttons.main.secondary.text,
                  ...styles.cardText,
                },
              }}
              text={text}
              icon={icon}
              onPress={() => console.log('TODO: Implement')}
            />
          );
        })}
      </View>

      {userPreferencesOptions.map((section, index) => {
        return (
          <View key={index} style={{marginBottom: padding / 2}}>
            {section.map(({Icon, iconName, title, status}) => (
              <GoToDetailLabel
                key={title}
                variantStyles={{
                  ...theme.components.goToDetailLabel,
                  goToIcon: {color: theme.colors.separator},
                }}
                customStyles={{
                  paddingVertical: padding,
                }}
                Icon={Icon}
                iconName={iconName}
                title={title}
                status={status}
              />
            ))}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CardControlsScreen;
