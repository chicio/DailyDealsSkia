import React, {FC, useEffect, useState} from 'react';
import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {LayoutChangeEvent, StyleSheet} from 'react-native';
import {
  Canvas,
  Color,
  Path,
  Skia,
  SkPath,
  SkPoint,
} from '@shopify/react-native-skia';

type Size = {
  width: number;
  height: number;
};

export type PolygonFeatures = {
  vertices: {
    topLeft: SkPoint;
    topRight: SkPoint;
    bottomRight: SkPoint;
    bottomLeft: SkPoint;
  };
  size: Size;
};

type PolygonPath = {
  path: SkPath;
  size: Size;
};

export const DailyDealsShapeSkia: FC<{
  shapeColor: Color;
  shapeOpacityDelay: number;
  getPolygonFeatures: (width: number, height: number) => PolygonFeatures;
  children: React.ReactNode;
}> = ({shapeColor, shapeOpacityDelay, getPolygonFeatures, children}) => {
  const shapeOpacity = useSharedValue(0);
  const contentOpacity = useSharedValue(0);
  const [polygonFeatures, setPolygonFeatures] = useState<PolygonPath | null>(
    null,
  );

  const onContentLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    const roundedWidth = Math.round(width);
    const roundedHeight = Math.round(height);

    const {
      vertices: {topLeft, topRight, bottomLeft, bottomRight},
      size,
    } = getPolygonFeatures(roundedWidth, roundedHeight);

    const path = Skia.Path.Make();
    path.moveTo(topLeft.x, topLeft.y);
    path.lineTo(topRight.x, topRight.y);
    path.lineTo(bottomRight.x, bottomRight.y);
    path.lineTo(bottomLeft.x, bottomLeft.y);
    path.close();

    setPolygonFeatures({
      path,
      size,
    });
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
          <Path path={polygonFeatures.path} color={shapeColor} />
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
