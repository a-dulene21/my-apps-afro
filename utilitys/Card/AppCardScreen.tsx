
import React from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { Card } from 'react-native-paper';

type AppCardProps = {
  children?: React.ReactNode;
  image?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  mode?: 'elevated' | 'outlined' | 'contained';
};

export default function AppCard({
  children,
  image,
  style,
  onPress,
  mode = 'elevated',
}: AppCardProps) {
  return (
    <Card
      mode={mode}
      style={style}
      onPress={onPress}
    >
      {image && (
        <Card.Cover source={image} />
      )}

      {children && (
        <Card.Content>
          {children}
        </Card.Content>
      )}
    </Card>
  );
}

