import React, {FC} from 'react';
import {View} from 'react-native';
import {DailyDealsTitle} from './DailyDealsTitle.tsx';
import {DailyDealsOrigin} from './DailyDealsOrigin.tsx';

export const DailyDealsHeader: FC<{
  originCity: string;
  onPress: () => void;
}> = ({originCity, onPress}) => {
  return (
    <View>
      <DailyDealsTitle />
      <DailyDealsOrigin originCity={originCity} onPress={onPress} />
    </View>
  );
};
