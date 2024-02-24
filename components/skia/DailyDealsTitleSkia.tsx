import React, {FC} from 'react';
import {DailyDealsShapeSkia, PolygonFeatures} from './DailyDealsShapeSkia.tsx';
import {DailyDealsTitle} from '../DailyDealsTitle.tsx';

const RIGHT_INCLINATION = 15;

const getPolygonFeatures = (width: number, height: number): PolygonFeatures => {
  const widthWithInclination = width + RIGHT_INCLINATION;

  return {
    vertices: {
      topLeft: {x: 0, y: 2},
      topRight: {x: widthWithInclination, y: 0},
      bottomRight: {x: width, y: height},
      bottomLeft: {x: 3, y: height},
    },
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
    getPolygonFeatures={getPolygonFeatures}>
    <DailyDealsTitle />
  </DailyDealsShapeSkia>
);
