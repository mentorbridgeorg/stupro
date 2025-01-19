import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#F3E6A0',
      100: '#F3D68D',
      200: '#F3C371',
      300: '#F3B356',
      400: '#F3A03B',
      500: '#F3C331',
      600: '#D1A028',
      700: '#B78A1F',
      800: '#9D7316',
      900: '#8B5C0D',
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
