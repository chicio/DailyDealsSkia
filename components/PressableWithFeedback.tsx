import React, {FC} from 'react';
import {Pressable} from 'react-native';

type Props = {
  onPress: () => void;
  children: React.ReactNode;
};

export const PressableWithFeedback: FC<Props> = ({onPress, children}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [pressed ? {opacity: 0.75} : {}]}>
      {children}
    </Pressable>
  );
};
