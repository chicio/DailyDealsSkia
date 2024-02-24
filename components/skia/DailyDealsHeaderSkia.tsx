import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {DailyDealsTitleSkia} from './DailyDealsTitleSkia.tsx';
import {DailyDealsOriginSkia} from './DailyDealsOriginSkia.tsx';

export const DailyDealsHeaderSkia: FC<{
  originCity: string;
  onPress: () => void;
}> = ({originCity, onPress}) => (
  <View style={styles.header}>
    <DailyDealsTitleSkia />
    <DailyDealsOriginSkia originCity={originCity} onPress={onPress} />
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
