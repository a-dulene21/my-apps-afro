// features/auth/screens/LoginScreen.styles.ts
import { StyleSheet } from 'react-native';
import {spacing} from '../../../constants/spacing';

export const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.xLarge,
  },
  title: {
    textAlign: 'center',
    marginBottom: spacing.large,
  },
  input: {
    marginBottom: spacing.medium,
  },
  button: {
    marginTop: spacing.small,
  },
  error: {
    marginBottom: spacing.small,
    color: 'red',
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
