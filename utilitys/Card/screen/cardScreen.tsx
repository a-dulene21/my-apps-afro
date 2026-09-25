import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
 
} from 'react-native';
import cardStyles from '../cardStyles';
import { Card } from 'react-native-paper';
import { CardData } from '../types/card';
import { Ionicons } from '@expo/vector-icons';



type CardStreamProps = {
  service: CardData;
  cardWidth?: number;
  imageHeight?: number;
  onPress?: (service: CardData) => void;
};
const text='resever'
const CardScreen = ({
 cardWidth,
 imageHeight,
 onPress,
 service,
 
}:CardStreamProps) => {
  return (


    <View style={[
      cardStyles.cardContainer,
        {
      width: cardWidth,
    },
      ]}>

      {/* Image */}
      <View style=
{[
    cardStyles.imageWrapper,
    {
      height: imageHeight,
    },
  ]}      
      >
         <Image
          source={{ uri: service.imageSource }}
          style={cardStyles.cardImage}
        />

      
      </View>


      {/* Informations */}
      <View style={cardStyles.content}>

         {/* Titel */}
        <Text style={cardStyles.cardTitle}
         numberOfLines={2}>
          {service.title}
        </Text>
        
        {/*price */}
        <Text style={cardStyles.cardPrice}>
          {service.price} $ CAD
        </Text>


        {/* Anbieter  */}
        <Text style={cardStyles.providerText}>
          Par {service.providerName} •{' '}

          {/* Bewertung */}
          <Text style={cardStyles.rating}>
            ★ {service.rating}
          </Text>
                                      
                 </Text>

                   {/* Dauer */}
        <Text style={cardStyles.cardDuration}>
          {service.duration}
        </Text>

        {/* Réservation */}

       <TouchableOpacity
        style={cardStyles.button}
  onPress={() => onPress?.(service)}
  activeOpacity={0.7}
>
  <Ionicons
    name="cart-outline"
    size={20}
  />
</TouchableOpacity>
        {/* <TouchableOpacity
          style={cardStyles.button}
          onPress={() => onPress?.(service)}
          activeOpacity={0.8}
        >
          
          <Text style={cardStyles.buttonText}>
            Réserver 
          </Text>
        </TouchableOpacity> */}

      </View>
    </View>

 


  );
};

export default CardScreen;