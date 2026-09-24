import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

type AppRadioButtonProps = {
  label: string;
  value: string;
  selectedValue: string;
  onSelect: (value: string) => void;
  disabled?: boolean;
};

export default function AppRadioButton({
  label,
  value,
  selectedValue,
  onSelect,
  disabled = false,
}: AppRadioButtonProps) {
  const isSelected = selectedValue === value;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <RadioButton
        value={value}
        status={isSelected ? 'checked' : 'unchecked'}
        onPress={() => onSelect(value)}
        disabled={disabled}
      />

      <Text onPress={() => !disabled && onSelect(value)}>
        {label}
      </Text>
    </View>
  );
}