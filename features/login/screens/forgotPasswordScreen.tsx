
import AppButton from "../../../utilitys/Button/AppButton";
import AppInput from "../../../utilitys/Input/AppInput";
import { stylesLogin } from "../styles/loginStyles";
import { StyleSheet, Text, View } from 'react-native';


export default function ForgotPasswordScreen() {
    function handleRegister(): void {
        throw new Error("Function not implemented.");
    }

  return (
    <View style={stylesLogin.container}>
      <Text  style={stylesLogin.title}>
        Passwort zurücksetzen
      </Text>
      <AppInput
        label="E-Mail"
        placeholder="Ihre E-Mail-Adresse"
        keyboardType="email-address"
        autoCapitalize="none"
        style={stylesLogin.input}
        value={""}
        onChangeText={function (text: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <AppButton
            variant="secondary"
            onPress={handleRegister}
            >
            Senden
            </AppButton>
    </View>
  );
}
