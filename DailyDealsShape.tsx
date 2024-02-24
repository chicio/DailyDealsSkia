import React, {FC, useState} from 'react';
import Animated, {
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {LayoutChangeEvent, StyleSheet} from 'react-native';
import {Canvas, Color, Path, SkPath} from '@shopify/react-native-skia';

type Size = {
  width: number;
  height: number;
};

type PolygonFeatures = {
  vertices: SkPath;
  size: Size;
};

export const DailyDealsShape: FC<{
  shapeColor: Color;
  polygonFeaturesCalculation: (
    width: number,
    height: number,
  ) => PolygonFeatures;
  children: React.ReactNode;
}> = ({shapeColor, polygonFeaturesCalculation, children}) => {
  const opacity = useSharedValue(0);
  const [polygonFeatures, setPolygonFeatures] =
    useState<PolygonFeatures | null>(null);

  const onContentLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    const roundedWidth = Math.round(width);
    const roundedHeight = Math.round(height);

    setPolygonFeatures(polygonFeaturesCalculation(roundedWidth, roundedHeight));
    opacity.value = withDelay(500, withSpring(1));
  };

  return (
    <Animated.View
      onLayout={onContentLayout}
      style={{...styles.pressableContent, opacity}}>
      {polygonFeatures && (
        <Canvas
          style={{
            ...styles.polygon,
            width: polygonFeatures.size.width,
            height: polygonFeatures.size.height,
          }}>
          <Path path={polygonFeatures.vertices} color={shapeColor} />
        </Canvas>
      )}
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  pressableContent: {
    overflow: 'visible',
    alignSelf: 'flex-start',
  },
  polygon: {
    position: 'absolute',
  },
});
