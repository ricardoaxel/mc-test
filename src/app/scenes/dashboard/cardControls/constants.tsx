import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {DefaultTheme} from 'styled-components/native';

import {GradientIcon} from '@atomic/atoms';

export const generalOptions = (theme: DefaultTheme) => [
  {
    id: 'resetPin',
    icon: (
      <GradientIcon
        name="eye-off-outline"
        Icon={Icon}
        border={0}
        padding={0}
        gradientColors={theme.gradientColors}
        size={24}
        customStyles={{marginBottom: 100}}
      />
    ),
    text: 'Reset PIN',
  },
  {
    id: 'notifications',
    icon: (
      <GradientIcon
        name="eye-off-outline"
        Icon={Icon}
        border={0}
        padding={0}
        gradientColors={theme.gradientColors}
        size={24}
      />
    ),
    text: 'Notifications',
  },
  {
    id: 'requestCard',
    icon: (
      <GradientIcon
        name="eye-off-outline"
        Icon={Icon}
        border={0}
        padding={0}
        gradientColors={theme.gradientColors}
        size={24}
      />
    ),
    text: 'Request New Card',
  },
  {
    id: 'adjustCardLimit',
    icon: (
      <GradientIcon
        name="eye-off-outline"
        Icon={Icon}
        border={0}
        padding={0}
        gradientColors={theme.gradientColors}
        size={24}
      />
    ),
    text: 'Adjust Credit Limit',
  },
];

export const userPreferencesOptions = [
  [
    {
      Icon: Icon,
      iconName: 'camera-front',
      title: 'Face ID',
      status: 'Enabled',
    },
    {
      Icon: Icon,
      iconName: 'wallet',
      title: 'Apple Wallet',
      status: 'Open',
    },
    {
      Icon: Icon,
      iconName: 'refresh',
      title: 'Auto Pay',
      status: 'Enabled',
    },
    {
      Icon: Icon,
      iconName: 'leaf',
      title: 'Online Statements',
      status: 'Enrolled',
    },
  ],
  [
    {
      Icon: Icon,
      iconName: 'link',
      title: 'Manage Subscriptions',
      status: '3',
    },
    {
      Icon: FontAwesome5Icon,
      iconName: 'user-plus',
      title: 'Authorized Users',
      status: '1',
    },
  ],

  [
    {
      Icon: AntDesignIcon,
      iconName: 'warning',
      title: 'Spend Limit Settings',
      status: '',
    },
    {
      Icon: Icon,
      iconName: 'web',
      title: 'Overseas Spend Settings',
      status: '',
    },
  ],
  [
    {
      Icon: MaterialIcon,
      iconName: 'tap-and-play',
      title: 'Tap & Pay',
      status: '',
    },
    {
      Icon: Icon,
      iconName: 'timer-outline',
      title: 'FICO Score',
      status: '',
    },
  ],
];
