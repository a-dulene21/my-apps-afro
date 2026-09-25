
import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors';
import { spacing } from '../../../constants/spacing';

export const searchBarStyles = StyleSheet.create({

    searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
  },
  iconStyle:{
    color: colors.grayText,
    marginRight: spacing.small,
    fontSize: 20,

  },
   searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 46,
    borderWidth: 1,
    borderColor: colors.grayLight,
  },
    searchSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: spacing.medium,
    gap: 10,
  },

})
 