import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { ThemeProvider } from '../themes/themeProvider';
import { Stack } from 'expo-router';
import HomePageScreen from '../features/home/screen/hompagescreen';

const Home = () => {
  return (

      <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

      <View >
      {/* Home Page */}
      <HomePageScreen />
     
      <StatusBar style="auto" />
    </View>
    </ThemeProvider>

    
  );
}

export default Home;
