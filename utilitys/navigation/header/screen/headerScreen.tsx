import { Text, TouchableOpacity, View } from "react-native";
import { headerStyles } from "../headerStyles";
import { Ionicons } from '@expo/vector-icons';
import { logoStyles } from "../../../../constants/logoText";
import colors from "../../../../themes/colors";


export function HeaderScreen() {

    return (
  <View style={headerStyles.header}>

        {/* --- LOGO --- */}
        <Text style={logoStyles.logoText}>SHEFA</Text>

        {/* --- BOUTON DE NOTIFICATION --- */}
        <TouchableOpacity style={headerStyles.notificationBtn}>
          <Ionicons name="notifications-outline" size={24} color={colors.primary} />
          <View style={headerStyles.badgeDot} />
        </TouchableOpacity>
      </View>
    );

}