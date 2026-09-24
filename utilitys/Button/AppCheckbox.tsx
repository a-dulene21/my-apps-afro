import React from 'react';
import { View } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';

type AppCheckboxProps = {
  checked: boolean;
  onPress: () => void;
  label: string;
};

export default function AppCheckbox({
  checked,
  onPress,
  label,
}: AppCheckboxProps) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={onPress}
      />

      <Text>{label}</Text>
    </View>
  );
}