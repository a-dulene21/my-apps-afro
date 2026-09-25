import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors';

export const localisationStyles = StyleSheet.create({

     locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    height: 46,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.grayLight,
    gap: 4,
  },
  locationText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textPrimary,
  },
})