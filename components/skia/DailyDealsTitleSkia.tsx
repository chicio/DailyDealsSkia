import React, {FC} from 'react';
import {DailyDealsShapeSkia} from './DailyDealsShapeSkia.tsx';
import {Skia} from '@shopify/react-native-skia';
import {DailyDealsTitle} from '../DailyDealsTitle.tsx';

const RIGHT_INCLINATION = 15;

const polygonFeaturesCalculation = (width: number, height: number) => {
  const widthWithInclination = width + RIGHT_INCLINATION;

  const path = Skia.Path.Make();
  path.moveTo(0, 2);
  path.lineTo(widthWithInclination, 0);
  path.lineTo(width, height);
  path.lineTo(3, height);
  path.close();

  return {
    vertices: path,
    size: {
      width: widthWithInclination,
      height: height,
    },
  };
};

export const DailyDealsTitleSkia: FC = () => (
  <DailyDealsShapeSkia
    shapeColor={'#F2007D'}
    shapeOpacityDelay={500}
    polygonFeaturesCalculation={polygonFeaturesCalculation}>
    <DailyDealsTitle />
  </DailyDealsShapeSkia>
);
