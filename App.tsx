import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {DailyDealsHeaderSkia} from './components/skia/DailyDealsHeaderSkia.tsx';
import {GradientBackground} from './components/GradientBackground.tsx';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <GradientBackground />
      <Text style={styles.titleLabel}>React Native Skia</Text>
      <DailyDealsHeaderSkia
        originCity={'London (LON)'}
        onPress={() =>
          Alert.alert('Pressed', 'Custom Component Pressed', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleLabel: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu-Bold',
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
});

export default App;
