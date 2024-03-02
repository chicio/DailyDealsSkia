import React, {FC, ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import {DailyDealsTitle} from './DailyDealsTitle.tsx';
import {DailyDealsOrigin} from './DailyDealsOrigin.tsx';
import {PolygonFeatures} from './DailyDealsBackgroundShape.tsx';

type Props = {
  originCity: string;
  onPress: () => void;
  titleShape: (polygonFeatures: PolygonFeatures) => ReactElement;
  originShape: (polygonFeatures: PolygonFeatures) => ReactElement;
};

export const DailyDealsHeader: FC<Props> = ({
  titleShape,
  originShape,
  originCity,
  onPress,
}) => (
  <View style={styles.header}>
    <DailyDealsTitle renderShape={titleShape} />
    <DailyDealsOrigin
      originCity={originCity}
      onPress={onPress}
      renderShape={originShape}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
