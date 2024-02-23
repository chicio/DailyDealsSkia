import React, {FC, useState} from 'react';
import {
  Image,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Canvas, Path} from '@shopify/react-native-skia';

type Size = {
  width: number;
  height: number;
};

type PolygonFeatures = {
  vertices: string;
  size: Size;
};

const BOTTOM_INCLINATION = 3;
const RIGHT_INCLINATION = 20;
const ARROW_DOWN = require('./images/arrow-icon-bold.png');
const ARROW_SIDE_SIZE = 20;

export const DailyDealsOrigin: FC<{
  originCity: string;
  onPress: () => void;
}> = ({originCity, onPress}) => {
  const [polygonFeatures, setPolygonFeatures] =
    useState<PolygonFeatures | null>(null);

  const onContentLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    const roundedWidth = Math.round(width);
    const roundedHeight = Math.round(height);
    const widthWithInclination = roundedWidth + RIGHT_INCLINATION;

    const topLeftVertex = '1,0';
    const topRightVertex = `${widthWithInclination},0`;
    const bottomRightVertex = `${roundedWidth},${roundedHeight}`;
    const bottomLeftVertex = `0,${roundedHeight - BOTTOM_INCLINATION}`;

    setPolygonFeatures({
      vertices: `M ${topLeftVertex} ${bottomLeftVertex} ${bottomRightVertex} ${topRightVertex} Z`,
      size: {
        width: widthWithInclination,
        height: roundedHeight,
      },
    });
  };

  return (
    <Pressable onPress={onPress} style={styles.pressable}>
      <View onLayout={onContentLayout} style={styles.pressableContent}>
        {polygonFeatures && (
          <Canvas
            style={{
              ...styles.polygon,
              width: polygonFeatures.size.width,
              height: polygonFeatures.size.height,
            }}>
            <Path path={polygonFeatures.vertices} color={'white'} />
          </Canvas>
        )}
        <Text style={styles.fromLabel}>From</Text>
        <View style={styles.originAndArrowIconContainer}>
          <Text style={styles.origin}>{originCity}</Text>
          <Image source={ARROW_DOWN} style={styles.arrow} />
        </View>
      </View>
    </Pressable>
  );
};

const textColor = '#441973';

const styles = StyleSheet.create({
  pressable: {
    marginLeft: 0,
    marginTop: -4,
    zIndex: 0,
    overflow: 'visible',
  },
  pressableContent: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'visible',
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 4,
  },
  polygon: {
    position: 'absolute',
  },
  fromLabel: {
    color: textColor,
    fontSize: 14,
  },
  originAndArrowIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
  },
  origin: {
    color: textColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrow: {
    width: ARROW_SIDE_SIZE,
    height: ARROW_SIDE_SIZE,
    marginLeft: 4,
  },
});
