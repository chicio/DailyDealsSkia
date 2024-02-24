import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';

export const PressableWithFeedback: FC<{
  onPress: () => void;
  children: React.ReactNode;
}> = ({onPress, children}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        pressed ? {...styles.pressable, opacity: 0.75} : styles.pressable,
      ]}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    marginLeft: 16,
    marginTop: -4,
    zIndex: -10,
    overflow: 'visible',
  },
});
