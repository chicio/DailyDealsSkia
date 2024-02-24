import React, {FC, ReactElement} from 'react';
import {
  DailyDealsBackgroundShape,
  PolygonFeatures,
} from './DailyDealsBackgroundShape.tsx';
import {StyleSheet, Text, View} from 'react-native';
import {PressableWithFeedback} from './PressableWithFeedback.tsx';
import Animated from 'react-native-reanimated';

const ARROW_DOWN = require('../images/arrow-icon-bold.png');
const ARROW_SIDE_SIZE = 20;

const BOTTOM_INCLINATION = 3;
const RIGHT_INCLINATION = 20;

const getPolygonFeatures = (width: number, height: number): PolygonFeatures => {
  const widthWithInclination = width + RIGHT_INCLINATION;
  const heightWithInclination = height - BOTTOM_INCLINATION;

  return {
    vertices: {
      topLeft: {x: 1, y: 0},
      topRight: {x: widthWithInclination, y: 0},
      bottomRight: {x: width, y: height},
      bottomLeft: {x: 0, y: heightWithInclination},
    },
    size: {
      width: widthWithInclination,
      height: height,
    },
  };
};

export const DailyDealsOrigin: FC<{
  originCity: string;
  onPress: () => void;
  renderShape: (polygonFeatures: PolygonFeatures) => ReactElement;
}> = ({originCity, onPress, renderShape}) => (
  <DailyDealsBackgroundShape
    renderShape={renderShape}
    getPolygonFeatures={getPolygonFeatures}
    opacityDelay={800}
    additionalStyle={styles.shapeStyle}>
    <PressableWithFeedback onPress={onPress}>
      <View style={styles.dailyDealsOriginContent}>
        <Text style={styles.fromLabel}>from</Text>
        <View style={styles.originAndArrowIconContainer}>
          <Text style={styles.origin}>{originCity}</Text>
          <Animated.Image source={ARROW_DOWN} style={styles.arrow} />
        </View>
      </View>
    </PressableWithFeedback>
  </DailyDealsBackgroundShape>
);

const textColor = '#441973';

const styles = StyleSheet.create({
  shapeStyle: {
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
