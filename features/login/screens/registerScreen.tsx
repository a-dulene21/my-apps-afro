
import { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { stylesLogin } from '../styles/loginStyles';
import AppInput from '@/features/components/Input/AppInput';
import AppButton from '@/features/components/Button/AppButton';

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log('Registrierung:', {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <View style={stylesLogin.container}>
      <Text
        variant="headlineMedium"
        style={stylesLogin.title}
      >
        Registrierung
      </Text>

      <AppInput
        label="Vorname"
        placeholder="Ihr Vorname"
        value={firstName}
        onChangeText={setFirstName}
        autoCapitalize="words"
        style={stylesLogin.input}
      />

      <AppInput
        label="Nachname"
        placeholder="Ihr Nachname"
        value={lastName}
        onChangeText={setLastName}
        autoCapitalize="words"
        style={stylesLogin.input}
      />

      <AppInput
        label="E-Mail"
        placeholder="Ihre E-Mail-Adresse"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={stylesLogin.input}
      />

      <AppInput
        label="Passwort"
        placeholder="Ihr Passwort"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        style={stylesLogin.input}
      />

      <AppInput
        label="Passwort bestätigen"
        placeholder="Passwort erneut eingeben"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
        style={stylesLogin.input}
      />

      <AppButton onPress={handleRegister}>
        Registrieren
      </AppButton>
    </View>
  );
}