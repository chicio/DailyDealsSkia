import React, {FC} from 'react';
import {DailyDealsShape} from './DailyDealsShape.tsx';
import {Image, StyleSheet, Text} from 'react-native';

const FIRE_SIZE = 30;
const FIRE = require('./images/fire.png');

export const DailyDealsTitle: FC = () => (
  <DailyDealsShape shapeColor={'#F2007D'}>
    <Image source={FIRE} style={styles.fire} />
    <Text style={styles.titleLabel}>Daily deals</Text>
  </DailyDealsShape>
);

const textColor = 'white';

const styles = StyleSheet.create({
  titleLabel: {
    color: textColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
  fire: {
    width: FIRE_SIZE,
    height: FIRE_SIZE,
    marginLeft: 4,
  },
});
