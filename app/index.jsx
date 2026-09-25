import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from '../features/login/screens/loginScreen';
import { ThemeProvider } from '../themes/themeProvider';
import { Stack } from 'expo-router';
import CardScreen from '../utilitys/Card/cardScreen';

const Home = () => {
  return (

      <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

      <View >
      {/* <LoginScreen /> */}
      <CardScreen 
      imageSource={require('../assets/images/frisur.jpg')}
      title="Massage Relaxante"
      price={50}
      rating={4.5}
      onPress={() => console.log('Réservation effectuée !')}
      />
      <StatusBar style="auto" />
    </View>
    </ThemeProvider>

    
  );
}

export default Home;
