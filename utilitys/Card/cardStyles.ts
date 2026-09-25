import { sizes, spacing } from "../../constants/constantIndex";
import colors from "../../themes/colors";
import { StyleSheet, useWindowDimensions,} from 'react-native';


//const { width } = useWindowDimensions();


const cardStyles = StyleSheet.create({
  

  cardContainer: {
    // backgroundColor: colors.surface,
    // borderColor: colors.border,
    borderWidth: 1,
    borderRadius: spacing.xSmall,
    overflow: 'hidden',
    marginVertical: 0,
    elevation: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    
  },

  imageWrapper: {
    position: 'relative',
    height: 180,
    width: '100%',
  },

 

   priceBadge: {
    position: 'absolute',
    top: spacing.small,
    right: spacing.small,

    paddingHorizontal: 12,
    paddingVertical: 6,

    borderRadius: 20,

    // backgroundColor: colors.secondary,
  },

  content: {
    padding: spacing.medium,
  },


  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardInfo: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 6,
    
  },
  cardPrice: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.accent,
    marginBottom: 4,
  },
  cardDuration: {
    fontSize: 12,
    color: colors.textSecondary,
  },

 

  providerText: {
    color: colors.textSecondary,
    fontSize: 12,
    marginBottom: spacing.medium,
  },

  rating: {
    color: '#FFD700',
  },

  button: {
    color: colors.primary,
    // paddingVertical: 4,
    // borderRadius: 12,
    // alignItems: 'center',
    // marginTop:'auto'
      width: 36,
  height: 26,
  borderRadius: 18,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  },

  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',

  },
});


export default cardStyles;