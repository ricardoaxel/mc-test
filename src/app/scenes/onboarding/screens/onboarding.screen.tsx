import React, {FC} from 'react';
import {ImageSourcePropType, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ElementsList, ConnectService} from '@atomic/organisms';
import {
  AlertModal,
  BottomModal,
  DialogContent,
  IconSquare,
} from '@atomic/molecules';
import {Button} from '@atomic/atoms';
import {ServiceProviderKeyType} from '@utils/interfaces';

import {OnboardingRoutes} from '../onboarding.stack';
import styles from './onboarding.screen.style';
import {OnboardingScreenContainer} from './onboarding.screen.container';

type ScreenProps = StackScreenProps<OnboardingRoutes, 'Onboarding'>;

export interface IServiceProvider {
  name: string;
  image: ImageSourcePropType;
  color: string;
  isSelected?: boolean;
  id: ServiceProviderKeyType;
}

const OnboardingScreen: FC<ScreenProps> = ({navigation}) => {
  const {
    theme,
    paddingHorizontal,
    internalVerticalPadding,
    socialCardsContainerHeight,
    socialCardsContainerWidth,
    actualSelection,
    isContinueEnabled,
    showConnectedAlert,
    showAllSet,
    actualServiceData,
    cleanActualSelection,
    cardsData,
    addService,
    openAllSetModal,
    closeAllSetModal,
    goToDashboard,
  } = OnboardingScreenContainer({navigation});

  return (
    <>
      <View
        style={[
          {
            backgroundColor: theme.colors.background,
          },
          styles.container,
        ]}>
        <View
          style={[
            styles.descriptionSection,
            {paddingHorizontal: paddingHorizontal},
          ]}>
          <Text style={theme.texts.titles}>Connect service providers</Text>

          <Text style={[theme.texts.default, styles.descriptionTitle]}>
            Select accounts you have that you would like to update with your new
            credit card
          </Text>
        </View>
        <ElementsList
          width={socialCardsContainerWidth}
          height={socialCardsContainerHeight}
          visibleColumnsNumber={2}
          visiblesRowsNumber={2}
          gap={15}
          internalPaddingVertical={internalVerticalPadding}
          internalPaddingHorizontal={paddingHorizontal}
          cards={cardsData}
        />
        <View
          style={[
            styles.actionsSection,
            {paddingHorizontal: paddingHorizontal},
          ]}>
          <Button
            onPress={openAllSetModal}
            variantStyles={
              isContinueEnabled
                ? theme.buttons.main.primaryBig
                : theme.buttons.alter.disabledBig
            }
            disabled={!isContinueEnabled}
            text={'Continue'}
          />
          <Button
            onPress={goToDashboard}
            variantStyles={theme.buttons.main.secondaryBig}
            text={'Skip for now'}
          />
        </View>
      </View>
      <BottomModal
        visible={!!actualSelection}
        onRequestClose={cleanActualSelection}>
        <ConnectService
          onRequestClose={cleanActualSelection}
          actualSelection={actualServiceData}
          onConnectService={addService}
        />

        <AlertModal
          visible={showConnectedAlert}
          customStyles={styles.connectedModal}>
          <IconSquare
            icon={{
              Comp: Icon,
              props: {
                name: 'link-variant-plus',
                style: {color: 'white'},
                size: 66.67,
              },
            }}
            text="Connected"
            variantStyles={theme.components.iconSquare}
          />
        </AlertModal>
      </BottomModal>
      <AlertModal visible={showAllSet}>
        <DialogContent
          variantStyles={theme.components.dialogContent}
          title={'All set!'}
          description={'Enjoy your digital journey.'}
          actionText={'View Dashboard'}
          onAccept={goToDashboard}
          onExit={closeAllSetModal}
          Icon={Icon}
          iconName={'card-bulleted-settings-outline'}
        />
      </AlertModal>
    </>
  );
};

export default OnboardingScreen;
