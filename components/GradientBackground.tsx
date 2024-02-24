import React, {FC} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {Canvas, LinearGradient, Rect, vec} from '@shopify/react-native-skia';

export const GradientBackground: FC = () => {
  const {width, height} = useWindowDimensions();

  return (
    <Canvas style={StyleSheet.absoluteFill}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, height)}
          colors={['#483D8B', '#6A5ACD', '#ADD8E6']}
        />
      </Rect>
    </Canvas>
  );
};
