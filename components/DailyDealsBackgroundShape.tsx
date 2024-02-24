import React, {FC, ReactElement, useEffect, useState} from 'react';
import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

type Size = {
  readonly width: number;
  readonly height: number;
};

export type Point = {
  readonly x: number;
  readonly y: number;
};

export type PolygonFeatures = {
  vertices: {
    topLeft: Point;
    topRight: Point;
    bottomRight: Point;
    bottomLeft: Point;
  };
  size: Size;
};

export const DailyDealsBackgroundShape: FC<{
  renderShape: (polygonFeatures: PolygonFeatures) => ReactElement;
  opacityDelay: number;
  getPolygonFeatures: (width: number, height: number) => PolygonFeatures;
  additionalStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}> = ({
  renderShape,
  opacityDelay,
  getPolygonFeatures,
  additionalStyle,
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

    setPolygonFeatures(getPolygonFeatures(roundedWidth, roundedHeight));
  };

  useEffect(() => {
    shapeOpacity.value = withDelay(
      opacityDelay,
      withTiming(1, {
        duration: 400,
      }),
    );
    contentOpacity.value = withDelay(
      opacityDelay + 350,
      withTiming(1, {
        duration: 400,
      }),
    );
  }, [contentOpacity, polygonFeatures, shapeOpacity, opacityDelay]);

  return (
    <Animated.View
      onLayout={onContentLayout}
      style={[
        {
          ...styles.container,
          opacity: shapeOpacity,
        },
        additionalStyle,
      ]}>
      {polygonFeatures && (
        <View style={styles.polygon}>{renderShape(polygonFeatures)}</View>
      )}
      <Animated.View style={{opacity: contentOpacity}}>
        {children}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
    alignSelf: 'flex-start',
  },
  polygon: {
    position: 'absolute',
  },
});
