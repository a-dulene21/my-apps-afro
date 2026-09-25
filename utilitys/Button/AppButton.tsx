import React from 'react';
import { Button } from 'react-native-paper';
import { useTheme } from '../../themes/themeProvider';

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
  style,
}: AppButtonProps) {
  const { theme } = useTheme();

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

  const getButtonColor = () => {
    switch (variant) {
      case 'secondary':
        return theme.secondary;

      case 'outline':
        return 'transparent';

      default:
        return theme.primary;
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'secondary':
        return theme.onSecondary;

      case 'outline':
        return theme.primary;

      default:
        return theme.onPrimary;
    }
  };

  return (
    <Button
      mode={getMode()}
      buttonColor={getButtonColor()}
      textColor={getTextColor()}
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      style={style}
    >
      {children}
    </Button>
  );
}


