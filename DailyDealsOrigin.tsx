import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {DailyDealsShape} from './DailyDealsShape.tsx';
import {Skia} from '@shopify/react-native-skia';

const ARROW_DOWN = require('./images/arrow-icon-bold.png');
const ARROW_SIDE_SIZE = 20;
const BOTTOM_INCLINATION = 3;
const RIGHT_INCLINATION = 20;

const dailyDealsOriginPolygonFeaturesCalculation = (
  width: number,
  height: number,
) => {
  const widthWithInclination = width + RIGHT_INCLINATION;
  const heightWithInclination = height - BOTTOM_INCLINATION;

  const path = Skia.Path.Make();
  path.moveTo(1, 0);
  path.lineTo(widthWithInclination, 0);
  path.lineTo(width, height);
  path.lineTo(0, heightWithInclination);
  path.close();

  return {
    vertices: path,
    size: {
      width: widthWithInclination,
      height: height,
    },
  };
};

export const DailyDealsOrigin: FC<{
  originCity: string;
  onPress: () => void;
}> = ({originCity, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.pressable}>
      <DailyDealsShape
        shapeColor={'white'}
        polygonFeaturesCalculation={dailyDealsOriginPolygonFeaturesCalculation}>
        <View style={styles.dailyDealsOriginContent}>
          <Text style={styles.fromLabel}>from</Text>
          <View style={styles.originAndArrowIconContainer}>
            <Text style={styles.origin}>{originCity}</Text>
            <Image source={ARROW_DOWN} style={styles.arrow} />
          </View>
        </View>
      </DailyDealsShape>
    </Pressable>
  );
};

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
    paddingTop: 8,
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
