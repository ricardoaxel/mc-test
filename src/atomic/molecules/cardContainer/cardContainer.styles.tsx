import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 160,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2.46,
    elevation: 9,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  name: {
    position: 'absolute',
    textTransform: 'uppercase',
    bottom: 30,
    left: 25,
  },
  blockedContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 8,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    gap: 10,
  },
  blockedPadding: {
    paddingBottom: '30%',
  },
  noPadding: {
    paddingBottom: 0,
  },
});

export default styles;
