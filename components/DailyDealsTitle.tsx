import React, {FC, useEffect} from 'react';
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

export const DailyDealsTitle: FC = () => {
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
    <View style={styles.dailyDealsTitleContent}>
      <Animated.Image source={FIRE} style={[styles.fire, animatedStyle]} />
      <Text style={styles.titleLabel}>Daily deals</Text>
    </View>
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
