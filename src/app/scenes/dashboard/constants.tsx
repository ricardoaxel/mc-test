import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FA6Icon from 'react-native-vector-icons/FontAwesome';

export const cardActionsInfo = [
  {
    Icon: FA6Icon,
    iconName: 'sliders',
    name: 'Controls',
    isActive: false,
    id: 'showControls',
  },
  {
    Icon: MaterialIcon,
    iconName: 'lock-outline',
    name: 'Lock Card',
    isActive: false,
    id: 'cardLocked',
  },
  {
    Icon: MaterialIcon,
    iconName: 'card-bulleted-settings-outline',
    name: 'Card Details',
    isActive: false,
    id: 'showCardDetails',
  },
];
