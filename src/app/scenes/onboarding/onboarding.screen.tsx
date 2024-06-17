import React, {FC, useState} from 'react';
import {Dimensions, ImageSourcePropType, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CardsList, ConnectService} from '@atomic/organisms';
import {
  AlertModal,
  BottomModal,
  DialogContent,
  IconSquare,
  SelectionCard,
} from '@atomic/molecules';
import {Button} from '@atomic/atoms';
import {ServiceProviderKeyType, serviceProviders} from '@utils/constants';

import {OnboardingRoutes} from './onboarding.stack';
import styles from './onboarding.screen.style';

type ScreenProps = StackScreenProps<OnboardingRoutes, 'OnboardingMain'>;

export interface IServiceProvider {
  name: string;
  image: ImageSourcePropType;
  color: string;
  isSelected?: boolean;
  id: ServiceProviderKeyType;
}

const OnboardingScreen: FC<ScreenProps> = ({navigation}) => {
  const theme = useTheme();

  // Padding it's declared independently since it has to be passed to the cards list
  // so the shadows be visible
  const paddingHorizontal = 20;

  // Dimensions for the Cards List
  const internalVerticalPadding = 14;
  const socialCardsContainerHeight = Dimensions.get('screen').height * 0.49;
  const socialCardsContainerWidth = Dimensions.get('screen').width;

  const [actualSelection, setActualSelection] =
    useState<ServiceProviderKeyType | null>(null);
  const [isContinueEnabled, setIsContinueEnabled] = useState(false);
  const [showConnectedAlert, setShowConnectedAlert] = useState(false);
  const [showAllSet, setShowAllSet] = useState(false);

  const actualServiceData = serviceProviders[actualSelection!];
  const cleanActualSelection = () => setActualSelection(null);

  const getCards = (data: IServiceProvider[]) =>
    data.map(({name, image, isSelected, id}) => {
      return {
        Comp: SelectionCard,
        props: {
          variantStyles: theme.components.selectionCard,
          image: image,
          isSelected: isSelected,
          name: name,
          id: id,
          onPress: () => setActualSelection(id),
        },
      };
    });

  const [cardsData, setCardsData] = useState(
    getCards(Object.values(serviceProviders)),
  );

  const addService = () => {
    const {id} = actualServiceData;

    setShowConnectedAlert(true);

    setTimeout(() => {
      setCardsData(
        cardsData.map(card =>
          card.props.id === id
            ? {...card, props: {...card.props, isSelected: true}}
            : card,
        ),
      );
      setActualSelection(null);
      setIsContinueEnabled(true);
      setShowConnectedAlert(false);
    }, 1500);
  };

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
        <CardsList
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
            onPress={() => setShowAllSet(true)}
            variantStyles={
              isContinueEnabled
                ? theme.buttons.main.primaryBig
                : theme.buttons.alter.disabledBig
            }
            disabled={!isContinueEnabled}
            text={'Continue'}
          />
          <Button
            onPress={() => console.log('pressed')}
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
          customStyles={{backgroundColor: 'transparent'}}>
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
          onAccept={() => console.log('aceptaoo')}
          onExit={() => setShowAllSet(false)}
          Icon={Icon}
          iconName={'card-bulleted-settings-outline'}
        />
      </AlertModal>
    </>
  );
};

export default OnboardingScreen;
