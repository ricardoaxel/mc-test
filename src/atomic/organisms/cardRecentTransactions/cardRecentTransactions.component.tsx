import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {useTheme} from 'styled-components';

import {GoToDetailLabel, TransactionLabel} from '@atomic/molecules';
import {ITransaction} from '@utils/interfaces';
import {useNavigation} from '@react-navigation/native';
import {DashboardRoutes} from '@app/scenes/dashboard/dashboard.stack';
import {StackNavigationProp} from '@react-navigation/stack';

interface ICardRecentTransactions {
  customStyles?: StyleProp<ViewStyle>;
  transactions: ITransaction[];
  hideHeader?: boolean;
  id: number;
}

export const CardRecentTransactions = ({
  customStyles,
  transactions,
  hideHeader,
  id,
}: ICardRecentTransactions) => {
  const navigation = useNavigation<StackNavigationProp<DashboardRoutes>>();
  const theme = useTheme();
  const {padding} = theme;

  const seeTransactions = () => {
    navigation.navigate('Transactions', {id});
  };

  return (
    <View style={[customStyles, {marginBottom: padding / 1.5}]}>
      {!hideHeader && (
        <GoToDetailLabel
          variantStyles={{
            ...theme.components.goToDetailLabel,
            title: {fontSize: 14},
          }}
          customStyles={{
            paddingVertical: padding / 2,
            paddingLeft: padding / 1.25,
            backgroundColor: theme.colors.alterSeparator,
          }}
          title="Recent Transactions"
          status="View all"
          onPressAction={seeTransactions}
        />
      )}
      {transactions.map(({id, image, title, date, quantity, points}) => (
        <TransactionLabel
          key={id}
          image={image}
          variantStyles={theme.components.transactionLabel}
          title={title}
          date={date}
          quantity={quantity}
          points={points}
        />
      ))}
    </View>
  );
};
