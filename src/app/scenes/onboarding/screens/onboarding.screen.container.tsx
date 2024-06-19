import {useState} from 'react';
import {Dimensions, ImageSourcePropType} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';

import {SelectionCard} from '@atomic/molecules';
import {serviceProviders} from '@utils/constants';
import {ServiceProviderKeyType} from '@utils/interfaces';

import {OnboardingRoutes} from '../onboarding.stack';

export interface IServiceCardProvider {
  name: string;
  image: ImageSourcePropType;
  color: string;
  isSelected?: boolean;
  id: ServiceProviderKeyType;
}

export const OnboardingScreenContainer = ({
  navigation,
}: {
  navigation: StackNavigationProp<OnboardingRoutes, 'Onboarding', undefined>;
}) => {
  const theme = useTheme();

  // Padding it's declared independently since it has to be passed to the cards list
  // so the shadows be visible
  const {padding: paddingHorizontal} = theme;

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

  const getCards = (data: IServiceCardProvider[]) =>
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
    }, 1250);
  };
  const openAllSetModal = () => setShowAllSet(true);
  const closeAllSetModal = () => setShowAllSet(false);

  const goToDashboard = () => {
    setShowAllSet(false);
    navigation.navigate('DashboardStack', {screen: 'Dashboard'});
  };

  return {
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
  };
};
