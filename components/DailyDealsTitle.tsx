import React, {FC, ReactElement, useEffect} from 'react';
import {
  DailyDealsBackgroundShape,
  PolygonFeatures,
} from './DailyDealsBackgroundShape.tsx';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {StyleSheet, Text, View} from 'react-native';

const FIRE_SIZE = 25;
const FIRE = require('../images/fire.png');

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

export const DailyDealsTitle: FC<{
  renderShape: (polygonFeatures: PolygonFeatures) => ReactElement;
}> = ({renderShape}) => {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  useEffect(() => {
    scale.value = withDelay(
      1800,
      withSequence(withRepeat(withTiming(1.2, {duration: 175}), 8, true)),
    );
  }, [scale]);

  return (
    <DailyDealsBackgroundShape
      renderShape={renderShape}
      opacityDelay={500}
      getPolygonFeatures={getPolygonFeatures}>
      <View style={styles.dailyDealsTitleContent}>
        <Animated.Image source={FIRE} style={[styles.fire, animatedStyle]} />
        <Text style={styles.titleLabel}>Daily deals</Text>
      </View>
    </DailyDealsBackgroundShape>
  );
};

const textColor = 'white';

const styles = StyleSheet.create({
  dailyDealsTitleContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 4,
    paddingTop: 8,
    paddingBottom: 8,
    gap: 4,
  },
  titleLabel: {
    color: textColor,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu-Bold',
  },
  fire: {
    width: FIRE_SIZE,
    height: FIRE_SIZE,
    marginLeft: 4,
  },
});
