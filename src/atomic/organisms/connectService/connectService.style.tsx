import {StyleSheet} from 'react-native';

const margin = 22;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  serviceColorIndicator: {
    backgroundColor: '#111',
    width: '100%',
    height: 10,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: margin,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  closeButton: {
    position: 'absolute',
    zIndex: 1,
    top: 18,
    right: 0,
  },
  form: {
    gap: 16,
  },
});

export default styles;
