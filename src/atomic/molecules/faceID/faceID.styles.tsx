import {StyleSheet} from 'react-native';

const size = 72;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 155,
    height: 155,
    borderRadius: 10,
    gap: 20,
  },
  image: {
    width: size,
    height: size,
  },
});

export default styles;
