module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          // This has to be mirrored in tsconfig.json
          '@app/*': './src/app/*',
          '@assets': './src/assets',
          '@atomic': './src/atomic',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
