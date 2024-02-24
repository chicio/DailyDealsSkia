import React, {FC} from 'react';
import {Canvas, Color, Path, Skia} from '@shopify/react-native-skia';
import {PolygonFeatures} from './DailyDealsBackgroundShape.tsx';

export const DailyDealsShapeSkia: FC<{
  polygonFeatures: PolygonFeatures;
  shapeColor: Color;
}> = ({polygonFeatures, shapeColor}) => {
  const {
    vertices: {topLeft, topRight, bottomLeft, bottomRight},
    size,
  } = polygonFeatures;

  const path = Skia.Path.Make();
  path.moveTo(topLeft.x, topLeft.y);
  path.lineTo(topRight.x, topRight.y);
  path.lineTo(bottomRight.x, bottomRight.y);
  path.lineTo(bottomLeft.x, bottomLeft.y);
  path.close();

  return (
    polygonFeatures && (
      <Canvas
        style={{
          width: size.width,
          height: size.height,
        }}>
        <Path path={path} color={shapeColor} />
      </Canvas>
    )
  );
};
