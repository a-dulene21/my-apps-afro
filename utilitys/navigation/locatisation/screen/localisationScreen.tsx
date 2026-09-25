import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "../../../../themes/colors";
import { localisationStyles } from "../localisationStyles";


type LocationSelectorProps = {
  location: string;
  onPress: () => void;
};

export function LocalisationScreen({
  location,
  onPress,
}: LocationSelectorProps) {

    return ( 
                <TouchableOpacity 
                style={localisationStyles.locationSelector}
                 onPress={onPress}>

                  <Ionicons name="location-sharp" size={16} color={colors.accent} />
                  <Text style={localisationStyles.locationText}>{location}</Text>
                  <Ionicons name="chevron-down" size={14} color={colors.primary} />
                </TouchableOpacity>
    )
}