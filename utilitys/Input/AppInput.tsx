import React from 'react';
import { TextInput } from 'react-native-paper';

type AppInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  error?: boolean;
  disabled?: boolean;
  style?: object;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
};

export default function AppInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  error = false,
  disabled = false,
  style = {},
autoCapitalize = 'none',
}: AppInputProps) {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      error={error}
      disabled={disabled}
      style={style}
      autoCapitalize={autoCapitalize}
    />
  );
}