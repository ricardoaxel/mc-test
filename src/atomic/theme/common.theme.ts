import {DefaultTheme} from 'styled-components/native';

export enum BrandColors {
  Primary = '#E35205',
  Secondary = '#333333',
  Background = '#FFFFFF',
  BackgroundSecondary = '#F8F8F8',
  Disabled = '#D6D6D6',
  ShadowColor = '#0000001F',
  CheckColor = '#7A9A02',
  SeparatorColor = '#ADADAD',
  AlterSeparatorColor = '#EBEBEB',
  AccentLinks = '#618DFF',
  FaceIdBackground = '#E5E5EA',
  FaceIdText = '#65666A',
}

const gradientColors = ['#E35205', '#F98E20'];

enum FontFamilys {
  Light = 'SFUIDisplay-Light',
  Regular = 'SFUIDisplay-Regular',
  SemiBold = 'SFUIDisplay-Semibold',
  Bold = 'SFUIDisplay-Bold',
}
const generalPadding = 24;
const listGap = 15;

const colors = {
  primary: BrandColors.Primary,
  secondary: BrandColors.Secondary,
  background: BrandColors.Background,
  separator: BrandColors.SeparatorColor,
  alterSeparator: BrandColors.AlterSeparatorColor,
  accentLinks: BrandColors.AccentLinks,
  faceIdText: BrandColors.FaceIdText,
  faceIdBackground: BrandColors.FaceIdBackground,
};

const fonts = {
  light: FontFamilys.Light,
  regular: FontFamilys.Regular,
  bold: FontFamilys.Bold,
};

const texts = {
  labels: {
    fontFamily: FontFamilys.Regular,
    color: BrandColors.Secondary,
    fontSize: 12,
  },
  default: {
    fontFamily: FontFamilys.Regular,
    color: BrandColors.Secondary,
    fontSize: 16,
  },
  defaultSecondary: {
    fontFamily: FontFamilys.Regular,
    color: BrandColors.Primary,
    fontSize: 16,
  },
  titles: {
    fontFamily: FontFamilys.SemiBold,
    color: BrandColors.Secondary,
    fontSize: 22,
  },
  headers: {
    fontFamily: FontFamilys.SemiBold,
    color: BrandColors.Background,
    fontSize: 18,
  },
  subTitlesSecondary: {
    fontFamily: FontFamilys.SemiBold,
    color: BrandColors.Primary,
    fontSize: 18,
  },
  button: {
    fontFamily: FontFamilys.SemiBold,
    color: BrandColors.Background,
    fontSize: 18,
  },
  buttonSecondary: {
    fontFamily: FontFamilys.SemiBold,
    color: BrandColors.Primary,
    fontSize: 18,
  },
  buttonCard: {
    fontFamily: FontFamilys.Bold,
    color: BrandColors.Background,
    fontSize: 14,
  },
  buttonSecondaryCard: {
    fontFamily: FontFamilys.Bold,
    color: BrandColors.Primary,
    fontSize: 14,
  },
};

const buttons = {
  main: {
    primary: {
      type: 'gradient',
      variant: 'primary',
      gradientColors,
      button: {height: 38},
      text: texts.button,
    },
    primaryBig: {
      type: 'gradient',
      variant: 'primary',
      gradientColors,
      button: {height: 48},
      text: {...texts.button, fontSize: 18},
    },
    secondary: {
      type: 'gradient',
      variant: 'secondary',
      gradientColors,
      button: {height: 38},
      text: texts.buttonSecondary,
    },
    secondaryBig: {
      type: 'gradient',
      variant: 'secondary',
      gradientColors,
      button: {height: 46},
      text: {...texts.buttonSecondary, fontSize: 18},
    },
    primaryCard: {
      type: 'gradient',
      variant: 'primary',
      gradientColors,
      button: {height: 38},
      text: texts.buttonCard,
    },
    secondaryCard: {
      type: 'gradient',
      variant: 'secondary',
      gradientColors,
      button: {height: 38},
      text: texts.buttonSecondaryCard,
    },
  },
  alter: {
    socialBig: {
      type: 'solid',
      button: {backgroundColor: BrandColors.Secondary, height: 48},
      text: {...texts.button, fontSize: 18},
    },
    disabledBig: {
      type: 'solid',
      button: {backgroundColor: BrandColors.Disabled, height: 48},
      text: {...texts.button, fontSize: 18},
    },
  },
};

const inputs = {
  inputLabelPrimary: {
    label: texts.labels,
    input: {backgroundColor: BrandColors.BackgroundSecondary},
    inputText: texts.default,
  },
};

const icons = {
  gradientIcon: {
    gradientColors,
    size: 52,
    padding: 10,
    border: 2,
    borderRadius: 52,
    color: colors.background,
  },
  gradientIconNoBorder: {
    gradientColors,
    size: 24,
    padding: 0,
    border: 0,
    borderRadius: 0,
  },
};

const components = {
  iconSquare: {
    container: {backgroundColor: BrandColors.Secondary},
    text: {...texts.headers},
    icon: {color: BrandColors.CheckColor},
  },
  dialogContent: {
    container: {backgroundColor: BrandColors.Background},
    icon: icons.gradientIcon,
    title: texts.titles,
    description: texts.default,
    button: buttons.main.primaryBig,
  },
  selectionCard: {
    gradientColors,
    check: BrandColors.CheckColor,
    buttons,
  },
  titleWithElement: {
    title: texts.defaultSecondary,
    value: texts.titles,
  },
  cardActions: {
    container: {backgroundColor: BrandColors.Background},
    icon: icons.gradientIcon,
    text: {...texts.default, fontSize: 14},
  },
  cardBalance: {
    container: {
      backgroundColor: BrandColors.Background,
      gap: generalPadding,
    },
    titleWithElement: {
      title: {...texts.titles, fontSize: 30},
      value: {...texts.default, fontSize: 14},
    },
    text: {...texts.default, fontSize: 14},
  },
  cardPaymentInfo: {
    container: {
      backgroundColor: BrandColors.Background,
      gap: generalPadding,
    },
    title: texts.subTitlesSecondary,
    titleWithElement: {
      container: {
        borderRightColor: colors.separator,
        paddingHorizontal: generalPadding,
      },
      title: {...texts.default, fontSize: 14},
      value: {...texts.titles, fontSize: 22},
    },
    button: buttons.main.secondaryBig,
  },
  goToDetailLabel: {
    listGap: listGap,
    container: {
      backgroundColor: BrandColors.Background,
      padding: generalPadding,
      marginBottom: 1,
    },
    icon: icons.gradientIconNoBorder,
    title: texts.default,
    status: {...texts.default, fontSize: 14},
    goToIcon: {color: colors.secondary},
  },
  transactionLabel: {
    listGap: listGap,
    container: {
      backgroundColor: BrandColors.Background,
      paddingHorizontal: generalPadding,
      paddingVertical: generalPadding / 2,
      borderBottomWidth: 1,
      borderBottomColor: colors.alterSeparator,
    },
    iconSize: 40,
    defaultText: texts.default,
    date: {...texts.default, fontSize: 14, color: colors.separator},
    points: {...texts.default, fontSize: 14, color: colors.accentLinks},
  },
  cardContainer: {
    icon: {color: colors.background},
    name: {...texts.default, fontSize: 12, color: colors.background},
    blockedMessage: {...texts.headers, fontSize: 12, fontFamily: fonts.bold},
  },
  cardControls: {
    container: {backgroundColor: BrandColors.Background},
    icon: icons.gradientIcon,
    title: texts.titles,
    description: texts.default,
    button: buttons.main.secondary,
    gradientColors,
    check: BrandColors.CheckColor,
    buttons,
  },
  faceID: {
    container: {backgroundColor: colors.faceIdBackground},
    text: {...texts.titles, fontSize: 16, color: colors.faceIdText},
  },
};

export const CommonTheme: DefaultTheme = {
  colors,
  gradientColors,
  fonts,
  padding: generalPadding,
  texts,
  buttons,
  inputs,
  icons,
  components,
};
