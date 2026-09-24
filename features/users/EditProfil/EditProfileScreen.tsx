import AppButton from '@/features/components/Button/AppButton';
import AppRadioButton from '@/features/components/Button/AppRadiobutton';
import AppInput from '@/features/components/Input/AppInput';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { userStyles } from './userStyles';



export default function EditProfileScreen() {
  const [firstName, setFirstName] = useState('Anna');
  const [lastName, setLastName] = useState('Müller');
  const [email, setEmail] = useState('anna@example.com');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('female');

  const handleSave = () => {
    const profile = {
      firstName,
      lastName,
      email,
      phone,
      gender,
    };

    console.log('Profil speichern:', profile);
  };

  return (
    <ScrollView contentContainerStyle={userStyles.container}>
      <Text variant="headlineMedium" style={userStyles.title}>
        Profil bearbeiten
      </Text>

      <AppInput
        label="Vorname"
        value={firstName}
        onChangeText={setFirstName}
        autoCapitalize="words"
      />

      <AppInput
        label="Nachname"
        value={lastName}
        onChangeText={setLastName}
        autoCapitalize="words"
      />

      <AppInput
        label="E-Mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <AppInput
        label="Telefon"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text variant="titleMedium" style={userStyles.sectionTitle}>
        Geschlecht
      </Text>

      <View>
        <AppRadioButton
          label="Frau"
          value="female"
          selectedValue={gender}
          onSelect={setGender}
        />

        <AppRadioButton
          label="Mann"
          value="male"
          selectedValue={gender}
          onSelect={setGender}
        />

        <AppRadioButton
          label="Divers"
          value="diverse"
          selectedValue={gender}
          onSelect={setGender}
        />
      </View>

      <AppButton
        variant="primary"
        onPress={handleSave}
      >
        Änderungen speichern
      </AppButton>
    </ScrollView>
  );
}

