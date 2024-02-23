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
      <Text style={styles.fromLabel}>From</Text>
      <View style={styles.originAndArrowIconContainer}>
        <Text style={styles.origin}>{originCity}</Text>
        <Image source={ARROW_DOWN} style={styles.arrow} />
      </View>
    </DailyDealsShape>
  </Pressable>
);

const textColor = '#441973';

const styles = StyleSheet.create({
  pressable: {
    marginLeft: 12,
    marginTop: -4,
    zIndex: -10,
    overflow: 'visible',
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
