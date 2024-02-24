import React, {FC} from 'react';
import {DailyDealsShapeSkia, PolygonFeatures} from './DailyDealsShapeSkia.tsx';
import {DailyDealsOrigin} from '../DailyDealsOrigin.tsx';
import {PressableWithFeedback} from '../PressableWithFeedback.tsx';

const BOTTOM_INCLINATION = 3;
const RIGHT_INCLINATION = 20;

const getPolygonFeatures = (width: number, height: number): PolygonFeatures => {
  const widthWithInclination = width + RIGHT_INCLINATION;
  const heightWithInclination = height - BOTTOM_INCLINATION;

  return {
    vertices: {
      topLeft: {x: 1, y: 0},
      topRight: {x: widthWithInclination, y: 0},
      bottomRight: {x: width, y: height},
      bottomLeft: {x: 0, y: heightWithInclination},
    },
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
      getPolygonFeatures={getPolygonFeatures}>
      <DailyDealsOrigin originCity={originCity} />
    </DailyDealsShapeSkia>
  </PressableWithFeedback>
);
