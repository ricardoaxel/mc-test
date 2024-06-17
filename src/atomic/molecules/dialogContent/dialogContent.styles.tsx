import {StyleSheet} from 'react-native';

const padding = 30;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    minHeight: '20%',
    borderRadius: 16,
    padding: padding,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    borderWidth: 6,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    paddingHorizontal: padding,
    paddingVertical: 25,
  },
  textsSection: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 26,
  },
  description: {
    fontSize: 18,
  },
  button: {
    width: '100%',
    marginTop: 120,
  },
});

export default styles;
