import React, {FC} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {DailyDealsHeader} from './components/DailyDealsHeader.tsx';
import {GradientBackground} from './components/GradientBackground.tsx';
import {DailyDealsShapeSkia} from './components/DailyDealsShapeSkia.tsx';
import {PolygonFeatures} from './components/DailyDealsBackgroundShape.tsx';
import { DailyDealsShapeSvg } from "./components/DailyDealsShapeSvg.tsx";

const renderDailyDealsShapeSkia = (
  polygonFeatures: PolygonFeatures,
  shapeColor: string,
) => (
  <DailyDealsShapeSkia
    polygonFeatures={polygonFeatures}
    shapeColor={shapeColor}
  />
);

const renderDailyDealsShapeSvg = (
  polygonFeatures: PolygonFeatures,
  shapeColor: string,
) => (
  <DailyDealsShapeSvg
    polygonFeatures={polygonFeatures}
    shapeColor={shapeColor}
  />
);

const App: FC = () => {
  const onPress = () =>
    Alert.alert('Pressed', 'Custom Component Pressed', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  const originCity = 'London (LON)';

  return (
    <View style={styles.container}>
      <GradientBackground />
      <View style={styles.section}>
        <Text style={styles.titleLabel}>React Native Skia</Text>
        <DailyDealsHeader
          originCity={originCity}
          onPress={onPress}
          originShape={polygonFeatures =>
            renderDailyDealsShapeSkia(polygonFeatures, '#FFFFFF')
          }
          titleShape={polygonFeatures =>
            renderDailyDealsShapeSkia(polygonFeatures, '#F2007D')
          }
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.titleLabel}>React Native SVG</Text>
        <DailyDealsHeader
          originCity={originCity}
          onPress={onPress}
          originShape={polygonFeatures =>
            renderDailyDealsShapeSvg(polygonFeatures, '#FFFFFF')
          }
          titleShape={polygonFeatures =>
            renderDailyDealsShapeSvg(polygonFeatures, '#F2007D')
          }
        />
      </View>
    </View>
  );
};

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
  section: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 72,
  },
});

export default App;
