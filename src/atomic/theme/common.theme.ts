import {DefaultTheme} from 'styled-components/native';

export enum BrandColors {
  Primary = '#E35205',
  Secondary = '#333333',
  Background = '#FFFFFF',
  BackgroundSecondary = '#F8F8F8',
  Disabled = '#D6D6D6',
  ShadowColor = '#0000001F',
  CheckColor = '#7A9A02',
}

const gradientColors = ['#E35205', '#F98E20'];

enum FontFamilys {
  Light = 'SFUIDisplay-Light',
  Regular = 'SFUIDisplay-Regular',
  SemiBold = 'SFUIDisplay-Semibold',
  Bold = 'SFUIDisplay-Bold',
}

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
  titles: {
    fontFamily: FontFamilys.SemiBold,
    color: BrandColors.Secondary,
    fontSize: 22,
  },
  titlesSecondary: {
    fontFamily: FontFamilys.SemiBold,
    color: BrandColors.Primary,
    fontSize: 22,
  },
  headers: {
    fontFamily: FontFamilys.SemiBold,
    color: BrandColors.Background,
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
    color: BrandColors.Background,
    size: 52,
    padding: 7,
    border: 2,
    borderRadius: 52,
  },
};

export const CommonTheme: DefaultTheme = {
  colors: {
    primary: BrandColors.Primary,
    background: BrandColors.Background,
  },
  gradientColors,
  fonts: {
    light: FontFamilys.Light,
    regular: FontFamilys.Regular,
    bold: FontFamilys.Bold,
  },
  texts,
  buttons,
  inputs,
  icons,
  components: {
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
  },
};
