
import {StyleSheet, Dimensions} from 'react-native';
import { themeColors } from '../../themes/themeColors';
import colors from '../../themes/colors';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 50) / 2; // 2 colonnes avec marges

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.light.background,
    paddingTop: 10,
  },
  
  mainScroll: {
    flex: 1,
  },

  mainScrollContent: {
    paddingBottom: 50,
  },

  logoText: {
    fontSize: 26,
    fontWeight: '800',
    color: themeColors.light.primary,
    letterSpacing: 1.5,
  },
  
  searchSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
 
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 1,
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 30,
    rowGap: 12,
    columnGap:10
    
  },

  
  card: {
    width: cardWidth,
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.grayLight,
    shadowColor: themeColors.light.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
 

 
});