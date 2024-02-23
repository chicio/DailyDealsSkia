import React from 'react';
import {Alert, View} from 'react-native';
import {DailyDealsHeader} from './DailyDealsHeader.tsx';

function App(): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        flexDirection: 'column',
      }}>
      <DailyDealsHeader
        originCity={'Milan'}
        onPress={() =>
          Alert.alert('Pressed', 'Custom Component Pressed', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
        }
      />
    </View>
  );
}
export default App;
