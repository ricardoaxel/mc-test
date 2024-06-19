import React from 'react';

import {GradientContainer} from '@atomic/atoms';
import {GradientColors} from '@utils/interfaces';

import styles from './headerBackground.styles';

const HeaderBackground = ({
  gradientColors,
}: {
  gradientColors: GradientColors;
}) => {
  return (
    <GradientContainer
      gradientColors={gradientColors}
      customExternalStyles={styles.gradientContainerStyles}
      customInternalStyles={styles.gradientContainerStyles}
      borderRadius={0}
      hasShadow={false}
    />
  );
};

export const getHeaderBackground = (gradientColors: GradientColors) => (
  <HeaderBackground gradientColors={gradientColors} />
);
