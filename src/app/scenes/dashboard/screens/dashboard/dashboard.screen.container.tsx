import React, {useEffect, useState} from 'react';
import {Dimensions, LayoutAnimation, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components/native';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {cardsInfo} from '@utils/mocks';

import {cardActionsInfo} from '../../constants';
import styles from './dashboard.screen.style';

export const DashboardScreenContainer = ({navigation}: {navigation: any}) => {
  const theme = useTheme();
  const {padding} = theme;
  const width = Dimensions.get('window').width;
  const cardSelectionDimensions = {width: 260, height: 165};

  const [showFaceIdTriggered, setShowFaceIdTriggered] = useState(false);
  const [showFaceIdModal, setshowFaceIdModal] = useState(false);
  const [actualCardsActionInfo, setActualCardsActionInfo] =
    useState(cardActionsInfo);

  const [currentCardIndex, setCurrentCardIndex] =
    useState<keyof typeof cardsInfo>(0);

  const [currentCardControls, setCurrentCardControls] = useState<any>({
    ...Object.keys(cardsInfo).map(_el => ({
      cardLocked: false,
      showCardDetails: false,
    })),
  });

  const {showCardDetails} = currentCardControls[currentCardIndex];

  const {
    cardType,
    number,
    expirationDate,
    cvc,
    totalCreditLimit,
    available,
    dueLimitDays,
    statementBalance,
    minimumPayment,
    transactions,
  } = cardsInfo[currentCardIndex];

  const callAction = (id: string) => {
    LayoutAnimation.easeInEaseOut();
    setActualCardsActionInfo(
      actualCardsActionInfo.map(cardAction =>
        cardAction.id === id
          ? {...cardAction, isActive: !cardAction.isActive}
          : cardAction,
      ),
    );

    setCurrentCardControls({
      ...currentCardControls,
      [currentCardIndex]: {
        ...currentCardControls[currentCardIndex],
        [id]: !currentCardControls[currentCardIndex][id],
      },
    });
  };

  const selectAction = (id: string) => {
    if (id === 'showControls') {
      navigation.navigate('Card Controls');
    } else {
      const shownCardsOpenAndSelected =
        id === 'showCardDetails' && showCardDetails;
      if (shownCardsOpenAndSelected) {
        callAction(id);
      } else {
        setShowFaceIdTriggered(true);
        setTimeout(() => {
          if (!shownCardsOpenAndSelected) {
            callAction(id);
            setShowFaceIdTriggered(false);
          }
        }, 1200);
      }
    }
  };

  // workaround for ios bug where modal not closing during layout animation
  useEffect(() => {
    if (showFaceIdTriggered) {
      setshowFaceIdModal(true);
    } else {
      requestAnimationFrame(() => {
        setshowFaceIdModal(false);
      });
    }
  }, [showFaceIdTriggered]);

  useEffect(() => {
    const actualControls = currentCardControls[currentCardIndex];
    setActualCardsActionInfo(
      actualCardsActionInfo.map(cardAction =>
        actualControls[cardAction.id] !== null
          ? {...cardAction, isActive: actualControls[cardAction.id]}
          : cardAction,
      ),
    );
    if (actualControls.showCardDetails) {
    }
  }, [currentCardIndex]);

  useFocusEffect(() => {
    navigation.getParent().setOptions({
      headerLeft: () =>
        showCardDetails && (
          <TouchableOpacity
            style={styles.headerRight}
            onPress={() => selectAction('showCardDetails')}>
            <Icon
              name="close"
              color={theme.headerClose}
              size={24}
              style={styles.headerRightIcon}
            />
          </TouchableOpacity>
        ),
    });
  });

  return {
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
  };
};
