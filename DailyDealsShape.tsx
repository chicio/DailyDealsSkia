import React, {FC, useEffect, useState} from 'react';
import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
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
  shapeOpacityDelay: number;
  polygonFeaturesCalculation: (
    width: number,
    height: number,
  ) => PolygonFeatures;
  children: React.ReactNode;
}> = ({
  shapeColor,
  shapeOpacityDelay,
  polygonFeaturesCalculation,
  children,
}) => {
  const shapeOpacity = useSharedValue(0);
  const contentOpacity = useSharedValue(0);
  const [polygonFeatures, setPolygonFeatures] =
    useState<PolygonFeatures | null>(null);

  const onContentLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    const roundedWidth = Math.round(width);
    const roundedHeight = Math.round(height);

    setPolygonFeatures(polygonFeaturesCalculation(roundedWidth, roundedHeight));
  };

  useEffect(() => {
    shapeOpacity.value = withDelay(
      shapeOpacityDelay,
      withTiming(1, {
        duration: 400,
      }),
    );
    contentOpacity.value = withDelay(
      shapeOpacityDelay + 350,
      withTiming(1, {
        duration: 400,
      }),
    );
  }, [contentOpacity, polygonFeatures, shapeOpacity, shapeOpacityDelay]);

  return (
    <Animated.View
      onLayout={onContentLayout}
      style={{...styles.pressableContent, opacity: shapeOpacity}}>
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
      <Animated.View style={{opacity: contentOpacity}}>
        {children}
      </Animated.View>
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
