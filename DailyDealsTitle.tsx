import React, {FC} from 'react';
import {DailyDealsShape} from './DailyDealsShape.tsx';
import {Image, StyleSheet, Text, View} from 'react-native';

const FIRE_SIZE = 20;
const FIRE = require('./images/fire.png');

export const DailyDealsTitle: FC = () => (
  <DailyDealsShape shapeColor={'#F2007D'}>
    <View style={styles.dailyDealsTitleContent}>
      <Image source={FIRE} style={styles.fire} />
      <Text style={styles.titleLabel}>Daily deals</Text>
    </View>
  </DailyDealsShape>
);

const textColor = 'white';

const styles = StyleSheet.create({
  dailyDealsTitleContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8,
    gap: 8,
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
