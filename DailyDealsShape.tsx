import React, {FC, useState} from 'react';
import Animated, {
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Canvas, Color, Path, Skia, SkPath} from '@shopify/react-native-skia';

type Size = {
  width: number;
  height: number;
};

type PolygonFeatures = {
  vertices: SkPath;
  size: Size;
};

const BOTTOM_INCLINATION = 3;
const RIGHT_INCLINATION = 20;

export const DailyDealsShape: FC<{
  shapeColor: Color;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}> = ({shapeColor, children}) => {
  const opacity = useSharedValue(0);
  const [polygonFeatures, setPolygonFeatures] =
    useState<PolygonFeatures | null>(null);

  const onContentLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    const roundedWidth = Math.round(width);
    const roundedHeight = Math.round(height);
    const widthWithInclination = roundedWidth + RIGHT_INCLINATION;

    const path = Skia.Path.Make();
    path.moveTo(1, 0);
    path.lineTo(widthWithInclination, 0);
    path.lineTo(roundedWidth, roundedHeight);
    path.lineTo(0, roundedHeight - BOTTOM_INCLINATION);
    path.close();

    setPolygonFeatures({
      vertices: path,
      size: {
        width: widthWithInclination,
        height: roundedHeight,
      },
    });
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
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'visible',
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'flex-start',
  },
  polygon: {
    position: 'absolute',
  },
});
