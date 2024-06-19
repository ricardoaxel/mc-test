import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {CardRecentTransactions} from '@atomic/organisms';
import {cardsInfo} from '@utils/mocks';
import {DashboardRoutes} from '../../dashboard.stack';

type ScreenProps = StackScreenProps<DashboardRoutes, 'Transactions'>;

const TransactionsScreen: FC<ScreenProps> = ({route}) => {
  const {
    params: {id},
  } = route;

  const {transactions} = cardsInfo[id];

  return (
    <ScrollView style={{}}>
      <CardRecentTransactions
        transactions={transactions}
        hideHeader={true}
        id={id}
      />
    </ScrollView>
  );
};

export default TransactionsScreen;
