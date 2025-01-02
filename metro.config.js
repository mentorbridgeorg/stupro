const {getDefaultConfig} = require('@react-native/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  const {
    resolver: {sourceExts, assetExts},
  } = config;

  return {
    ...config,
    transformer: {
      ...config.transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      ...config.resolver,
      assetExts: [
        ...assetExts.filter(ext => ext !== 'svg'),
        'png',
        'jpg',
        'jpeg',
        'gif',
      ],
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
