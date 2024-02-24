import React, {FC, useEffect} from 'react';
import {DailyDealsShape} from './DailyDealsShape.tsx';
import {StyleSheet, Text, View} from 'react-native';
import {Skia} from '@shopify/react-native-skia';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const FIRE_SIZE = 25;
const FIRE = require('./images/fire.png');
const RIGHT_INCLINATION = 15;

const dailyDealsTitlePolygonFeaturesCalculation = (
  width: number,
  height: number,
) => {
  const widthWithInclination = width + RIGHT_INCLINATION;

  const path = Skia.Path.Make();
  path.moveTo(0, 2);
  path.lineTo(widthWithInclination, 0);
  path.lineTo(width, height);
  path.lineTo(3, height);
  path.close();

  return {
    vertices: path,
    size: {
      width: widthWithInclination,
      height: height,
    },
  };
};

export const DailyDealsTitle: FC = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  useEffect(() => {
    scale.value = withDelay(
      2000,
      withSequence(withRepeat(withTiming(1.2, {duration: 175}), 8, true)),
    );
  }, [scale]);

  return (
    <DailyDealsShape
      shapeColor={'#F2007D'}
      shapeOpacityDelay={500}
      polygonFeaturesCalculation={dailyDealsTitlePolygonFeaturesCalculation}>
      <View style={styles.dailyDealsTitleContent}>
        <Animated.Image source={FIRE} style={[styles.fire, animatedStyle]} />
        <Text style={styles.titleLabel}>Daily deals</Text>
      </View>
    </DailyDealsShape>
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
