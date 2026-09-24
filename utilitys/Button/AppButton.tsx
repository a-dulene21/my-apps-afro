import React from 'react';
import { Button } from 'react-native-paper';

type AppButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
  mode?: 'elevated' | 'outlined' | 'contained';
  style?: object;
};

export default function AppButton({
  children,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
}: AppButtonProps) {
  const getMode = () => {
    switch (variant) {
      case 'outline':
        return 'outlined';

      case 'secondary':
        return 'contained-tonal';

      default:
        return 'contained';
    }
  };

  return (
    <Button
      mode={getMode()}
      onPress={onPress}
      loading={loading}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}