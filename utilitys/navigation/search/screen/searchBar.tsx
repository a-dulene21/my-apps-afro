import { TextInput, View } from "react-native";
import colors from "../../../../themes/colors";
import { Ionicons } from "@expo/vector-icons";
import { searchBarStyles } from "../searchBarStyles";

type SearchBarProps = {
  searchQuery: string;
  onSearchChange: (text: string) => void;
  placeholder?: string;
};

export function SearchBar({
  searchQuery,
  onSearchChange,
  placeholder = "Rechercher une coiffure...",
}: SearchBarProps) {
  return (
    <View style={searchBarStyles.searchBar}>
      <Ionicons
        name="search"
        style={searchBarStyles.iconStyle}
      />
      <TextInput
        placeholder="Rechercher une coiffure..."
        placeholderTextColor={colors.grayText}
        value={searchQuery}
        onChangeText={onSearchChange}
        style={searchBarStyles.searchInput}
      />
    </View>
  );
}
