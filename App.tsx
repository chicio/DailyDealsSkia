import React from 'react';
import {Alert, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {DailyDealsHeaderSkia} from './components/skia/DailyDealsHeaderSkia.tsx';
import {Canvas, LinearGradient, Rect, vec} from '@shopify/react-native-skia';

function App(): React.JSX.Element {
  const {width, height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Canvas style={StyleSheet.absoluteFill}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={['#483D8B', '#6A5ACD', '#ADD8E6']}
          />
        </Rect>
      </Canvas>
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
