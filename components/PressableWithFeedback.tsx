import React, {FC} from 'react';
import {Pressable} from 'react-native';

export const PressableWithFeedback: FC<{
  onPress: () => void;
  children: React.ReactNode;
}> = ({onPress, children}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [pressed ? {opacity: 0.75} : {}]}>
      {children}
    </Pressable>
  );
};
