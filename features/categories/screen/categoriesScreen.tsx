import { ScrollView, Text, TouchableOpacity } from "react-native";
import { categorieStyles } from "../categorieStyle";


type Category = {
  id: string;
  label: string;
};

type CategoriesProps = {
  categories?: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
};

const DEFAULT_CATEGORIES: Category[] = [
  { id: 'all', label: 'Toutes' },
  { id: 'women', label: 'Femmes' },
  { id: 'men', label: 'Hommes' },
  { id: 'children', label: 'Enfants' },
  { id: 'locks', label: 'Locks' },
];

export function Categories({
  categories = DEFAULT_CATEGORIES,
  selectedCategory,
  onCategoryChange,
}: CategoriesProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={categorieStyles.categoriesContainer}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      {categories.map((category) => {
        const isSelected = category.id === selectedCategory;

        return (
          <TouchableOpacity
            key={category.id}
            onPress={() => onCategoryChange(category.id)}
            style={[
              categorieStyles.categoryChip,
              isSelected
                ? categorieStyles.categoryChipActive
                : categorieStyles.categoryChipInactive,
            ]}
          >
            <Text
              style={[
                categorieStyles.categoryText,
                isSelected
                  ? categorieStyles.categoryTextActive
                  : categorieStyles.categoryTextInactive,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}