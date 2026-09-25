
import { useWindowDimensions } from 'react-native';

export function MediaResponsive() {
  const { width, height } = useWindowDimensions();

  const isPhone = width < 768;
  const isTablet = width >= 768;
  const isSmallPhone = width < 375;

  return {
    width,
    height,
    isPhone,
    isTablet,
    isSmallPhone,
  };
}