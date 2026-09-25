import React, { useState } from 'react';
import {
  View,
  ScrollView,
 
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { homeStyles } from '../homeStyles';
import colors from '../../../themes/colors';
import {HeaderScreen}
    from '../../../utilitys/navigation/header/screen/headerScreen';
import { SearchBar } from '../../../utilitys/navigation/search/screen/searchBar';
import { LocalisationScreen } from '../../../utilitys/navigation/locatisation/screen/localisationScreen';
import { Categories } from '../../categories/screen/categoriesScreen';
import { listCardServices } from '../../../utilitys/Card/services/services';
import CardScreen from '../../../utilitys/Card/screen/cardScreen';
import { MediaResponsive } from '../../../utilitys/mediaQuery/mediaResponsive';



export default function HomePageScreen() {

  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Montréal, QC');

const {
    width,
    isPhone,
    isTablet,
  } = MediaResponsive();

  return (
      <SafeAreaView style={{ flex: 1 }}>

    <ScrollView style={homeStyles.container}
    contentContainerStyle={{    paddingHorizontal: isTablet ? 32 : 20,
}}

      showsVerticalScrollIndicator={true}
>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {/* --- EN-TÊTE (HEADER) --- */}
      <HeaderScreen />
      

      {/* --- RECHERCHE ET LOCALISATION --- */}
      <View style={homeStyles.searchSection}>

        {/* --- BARRE DE RECHERCHE --- */}
       <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* --- SÉLECTEUR DE LOCALISATION --- */}
        <LocalisationScreen location={location} onPress={() => {}} />

      </View>



        
        {/* --- DÉFILEMENT DES CATÉGORIES --- */}
        <Categories
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />



        {/* --- GRILLE DES PRESTATIONS --- */}
        <View style={homeStyles.gridContainer}>
         
         
          {listCardServices.map((service) => (


             
       <CardScreen
         cardWidth={isTablet ? 220 : 170}
         imageHeight={isTablet ? 220 : 170}
        key={service.id}
        service={service}
         onPress={(selectedService) => {
        console.log('Service sélectionné :', selectedService);
      }}
          />

          ))}
        </View>

      </ScrollView>
      </SafeAreaView>

    
  );
}