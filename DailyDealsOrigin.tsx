import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {DailyDealsShape} from './DailyDealsShape.tsx';

const ARROW_DOWN = require('./images/arrow-icon-bold.png');
const ARROW_SIDE_SIZE = 20;

export const DailyDealsOrigin: FC<{
  originCity: string;
  onPress: () => void;
}> = ({originCity, onPress}) => (
  <Pressable onPress={onPress} style={styles.pressable}>
    <DailyDealsShape shapeColor={'white'}>
      <View style={styles.dailyDealsOriginContent}>
        <Text style={styles.fromLabel}>From</Text>
        <View style={styles.originAndArrowIconContainer}>
          <Text style={styles.origin}>{originCity}</Text>
          <Image source={ARROW_DOWN} style={styles.arrow} />
        </View>
      </View>
    </DailyDealsShape>
  </Pressable>
);

const textColor = '#441973';

const styles = StyleSheet.create({
  pressable: {
    marginLeft: 16,
    marginTop: -4,
    zIndex: -10,
    overflow: 'visible',
  },
  dailyDealsOriginContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 4,
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
