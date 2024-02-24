import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

const ARROW_DOWN = require('../images/arrow-icon-bold.png');
const ARROW_SIDE_SIZE = 20;

export const DailyDealsOrigin: FC<{
  originCity: string;
}> = ({originCity}) => (
  <View style={styles.dailyDealsOriginContent}>
    <Text style={styles.fromLabel}>from</Text>
    <View style={styles.originAndArrowIconContainer}>
      <Text style={styles.origin}>{originCity}</Text>
      <Animated.Image source={ARROW_DOWN} style={styles.arrow} />
    </View>
  </View>
);

const textColor = '#441973';

const styles = StyleSheet.create({
  dailyDealsOriginContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingTop: 12,
    paddingBottom: 8,
  },
  fromLabel: {
    color: textColor,
    fontSize: 14,
    fontFamily: 'Ubuntu-Regular',
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
    fontFamily: 'Ubuntu-Bold',
  },
  arrow: {
    width: ARROW_SIDE_SIZE,
    height: ARROW_SIDE_SIZE,
    marginLeft: 4,
  },
});
