module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@modules': './src/modules',
          '@assets': './src/assets',
          '@pages': './src/pages',
          '@api': './src/api',
          '@atoms': './src/ui/atoms',
          '@molecules': './src/ui/molecules',
          '@organisms': './src/ui/organisms',
        },
      },
    ],
  ],
};
