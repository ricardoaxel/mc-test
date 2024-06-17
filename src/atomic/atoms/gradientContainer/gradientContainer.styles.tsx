import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  externalContainerShadow: {
    //This background only helps to avoid the "RCTView has a shadow set but cannot calculate shadow efficiently." warning
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  subContiner: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  subContinerSecondary: {
    backgroundColor: 'white',
  },
  noBorder: {margin: 0},
});

export default styles;
