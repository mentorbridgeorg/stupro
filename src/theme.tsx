import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#E1E6F2',
      100: '#B3C4E0',
      200: '#849ED1',
      300: '#4B6E9A',
      400: '#0F2A5B',
      500: '#18387C',
      600: '#0A1D4B',
      700: '#050B1A',
      800: '#03040D',
      900: '#020204',
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
    font: {
      primary: '#006584',
      secondary: '#FFFFFF',
      tertiary: '#000000',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});
