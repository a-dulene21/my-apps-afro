import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import { spacing } from '../../constants/constantIndex';
import cardStyles from './cardStyles';
import { Card } from 'react-native-paper';



type ServiceCardProps = {
  title: string;
  price: number;
  rating: number;
  imageSource: any;
  providerName: string;
  onPress: () => void;
};

const CardScreen = ({
  title,
  price,
  rating,
  imageSource,
  providerName,
  onPress,
}: ServiceCardProps) => {
  return (


    <Card style={cardStyles.cardContainer}>

      {/* Image */}
      <View style={cardStyles.imageWrapper}>
         <Image
          source={imageSource}
          style={cardStyles.image}
        />

        {/* Prix */}
        <View style={cardStyles.priceBadge}>
          <Text style={cardStyles.priceText}>
            {price} $ CAD
          </Text>
        </View>
      </View>

      {/* Informations */}
      <View style={cardStyles.content}>

        <Text style={cardStyles.title}>
          {title}
        </Text>

        <Text style={cardStyles.providerText}>
          Par {providerName} •{' '}
          <Text style={cardStyles.rating}>
            ★ {rating}
          </Text>
        </Text>

        {/* Réservation */}
        <TouchableOpacity
          style={cardStyles.button}
          onPress={onPress}
          activeOpacity={0.8}
        >
          <Text style={cardStyles.buttonText}>
            Réserver ce style
          </Text>
        </TouchableOpacity>

      </View>
    </Card>

 


  );
};

export default CardScreen;