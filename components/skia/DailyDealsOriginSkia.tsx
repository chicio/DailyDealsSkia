import React, {FC} from 'react';
import {DailyDealsShapeSkia} from './DailyDealsShapeSkia.tsx';
import {Skia} from '@shopify/react-native-skia';
import {DailyDealsOrigin} from '../DailyDealsOrigin.tsx';
import {PressableWithFeedback} from '../PressableWithFeedback.tsx';

const BOTTOM_INCLINATION = 3;
const RIGHT_INCLINATION = 20;

const dailyDealsOriginPolygonFeaturesCalculation = (
  width: number,
  height: number,
) => {
  const widthWithInclination = width + RIGHT_INCLINATION;
  const heightWithInclination = height - BOTTOM_INCLINATION;

  const path = Skia.Path.Make();
  path.moveTo(1, 0);
  path.lineTo(widthWithInclination, 0);
  path.lineTo(width, height);
  path.lineTo(0, heightWithInclination);
  path.close();

  return {
    vertices: path,
    size: {
      width: widthWithInclination,
      height: height,
    },
  };
};

export const DailyDealsOriginSkia: FC<{
  originCity: string;
  onPress: () => void;
}> = ({originCity, onPress}) => (
  <PressableWithFeedback onPress={onPress}>
    <DailyDealsShapeSkia
      shapeColor={'white'}
      shapeOpacityDelay={800}
      polygonFeaturesCalculation={dailyDealsOriginPolygonFeaturesCalculation}>
      <DailyDealsOrigin originCity={originCity} />
    </DailyDealsShapeSkia>
  </PressableWithFeedback>
);
