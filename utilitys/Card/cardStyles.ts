import { sizes, spacing } from "../../constants/constantIndex";
import colors from "../../themes/colors";
import { StyleSheet,} from 'react-native';


const cardStyles = StyleSheet.create({
  cardContainer: {
    // backgroundColor: colors.surface,
    // borderColor: colors.border,
    borderWidth: 1,
    borderRadius: sizes.borderRadiusLarge,
    overflow: 'hidden',
    marginVertical: spacing.small,

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
    height: 350,
    width: '100%',
  },

  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'cover',
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

  priceText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },

  content: {
    padding: spacing.medium,
  },

  title: {
    // color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  providerText: {
    // color: colors.textSecondary,
    fontSize: 14,
    marginBottom: spacing.medium,
  },

  rating: {
    color: '#FFD700',
  },

  button: {
    // backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default cardStyles;