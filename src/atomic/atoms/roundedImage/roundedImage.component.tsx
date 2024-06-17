import React from 'react';
import {ImageSourcePropType, Image} from 'react-native';

interface IRoundedImage {
  source: ImageSourcePropType;
  size?: number;
}
const defaultImageSize = 72;

export const RoundedImage = ({
  source,
  size = defaultImageSize,
}: IRoundedImage) => {
  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
        borderRadius: size,
      }}
    />
  );
};
