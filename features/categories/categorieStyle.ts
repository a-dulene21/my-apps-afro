import colors from "../../themes/colors";
import { themeColors } from "../../themes/themeColors";
import {StyleSheet} from 'react-native';

export const categorieStyles =  StyleSheet.create({

    categoriesContainer: {
    marginBottom: 20,
  },
  categoryChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
  },
  categoryChipActive: {
    backgroundColor: themeColors.light.background,
    borderColor: themeColors.light.primary,
  },
  categoryChipInactive: {
    backgroundColor: colors.white,
    borderColor: colors.grayLight,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
  },
  categoryTextActive: {
    color: '#a82f2f',
  },
  categoryTextInactive: {
    color: colors.textPrimary,
  },
})