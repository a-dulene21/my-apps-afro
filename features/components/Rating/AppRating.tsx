import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type AppRatingProps = {
  rating: number;
  size?: number;
};

export default function AppRating({
  rating,
  size = 20,
}: AppRatingProps) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <MaterialCommunityIcons
          key={star}
          name={star <= rating ? 'star' : 'star-outline'}
          size={size}
          color="#FFD700"
        />
      ))}
    </View>
  );
}