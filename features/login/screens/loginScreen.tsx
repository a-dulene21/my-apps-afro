
// features/auth/screens/LoginScreen.tsx
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { stylesLogin } from '../styles/loginStyles';
import { loginServices } from '../services/loginServices';
import AppInput from '@/features/components/Input/AppInput';
import { Link } from 'expo-router';
import { spacing, typography } from '@/constants';
import AppButton from '@/features/components/Button/AppButton';


export default function LoginScreen() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleLogin,
  } = loginServices();

  return (
    // Die Nutzung im JSX bleibt exakt dieselbe: stylesLogin.container, stylesLogin.title, etc.
    <View style={stylesLogin.container}>
      <Text variant="headlineMedium" style={stylesLogin.title}>
        Willkommen Afro-Mix
      </Text>

      <AppInput
        label="E-Mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={stylesLogin.input}
        

      />

      <AppInput
        label="Passwort"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={stylesLogin.input}
      />

      {error !== '' && (
        <Text style={stylesLogin.error}>
          {error}
        </Text>
      )}

      <AppButton
        mode="contained"
        onPress={handleLogin}
        loading={loading}
        disabled={loading}
        style={stylesLogin.button}
      >
        Anmelden
      </AppButton>

<View
  style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.medium,
  }}
>


{/* <Link
  href="/registerScreen"
  style={{
    fontSize: typography.bodySmallSize,
    color: 'blue',
  }}
>
  Registrierung
</Link>
<Link
  href="/forgotPasswordScreen"
  style={{
    fontSize: typography.bodySmallSize,
  }}
>
  Passwort vergessen?
</Link> */}


</View>
    </View>
  );
}
