import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {CardHiddenNumber, FaceID} from '@atomic/molecules';
import {
  CardActions,
  CardBalance,
  CardDetails,
  CardPaymentInfo,
  CardRecentTransactions,
  CardSelector,
} from '@atomic/organisms';
import {cardsDisplay} from '@utils/mocks';

import {DashboardRoutes} from '../../dashboard.stack';
import styles from './dashboard.screen.style';
import {DashboardScreenContainer} from './dashboard.screen.container';

type ScreenProps = StackScreenProps<DashboardRoutes, 'Cards'>;

const DashboardScreen: FC<ScreenProps> = ({navigation}: {navigation: any}) => {
  const {
    padding,
    theme,
    cardType,
    number,
    currentCardIndex,
    setCurrentCardIndex,
    width,
    cardSelectionDimensions,
    currentCardControls,
    showCardDetails,
    expirationDate,
    cvc,
    available,
    actualCardsActionInfo,
    selectAction,
    totalCreditLimit,
    statementBalance,
    dueLimitDays,
    minimumPayment,
    transactions,
    showFaceIdModal,
  } = DashboardScreenContainer({navigation});

  return (
    <ScrollView style={styles.container}>
      <View
        style={[
          styles.cardInfo,
          {
            gap: padding,
            paddingVertical: padding,
            borderBottomColor: theme.colors.separator,
          },
        ]}>
        <CardHiddenNumber
          card={cardType}
          number={number}
          variantStyles={theme.texts.default}
        />
        <CardSelector
          currentCardIndex={currentCardIndex}
          onChangeCard={setCurrentCardIndex}
          customStyles={{width: width}}
          cards={cardsDisplay}
          width={cardSelectionDimensions.width}
          height={cardSelectionDimensions.height}
          cardsControls={currentCardControls}
        />
        {showCardDetails && (
          <CardDetails
            number={number}
            expirationDate={expirationDate}
            cvc={cvc}
          />
        )}
      </View>

      <View
        style={[
          {gap: padding / 1.5},
          !showCardDetails && {
            marginTop: -cardSelectionDimensions.height / 2 - padding,
          },
        ]}>
        <CardActions
          variantStyles={theme.components.cardActions}
          cardActionsInfo={actualCardsActionInfo}
          onPressAction={selectAction}
          customStyles={[
            {...theme.components.cardActions.container},
            {
              paddingVertical: padding,
            },
          ]}
        />
        <CardBalance
          variantStyles={theme.components.cardBalance}
          customStyles={{padding: padding}}
          total={totalCreditLimit}
          available={available}
        />
        <CardPaymentInfo
          variantStyles={theme.components.cardPaymentInfo}
          customStyles={{padding: padding}}
          balance={statementBalance}
          dueLimitDays={dueLimitDays}
          minimum={minimumPayment}
        />
        <CardRecentTransactions
          transactions={transactions.slice(0, 3)}
          id={currentCardIndex}
        />
      </View>
      <FaceID
        visible={showFaceIdModal}
        variantStyles={theme.components.faceID}
      />
    </ScrollView>
  );
};

export default DashboardScreen;
