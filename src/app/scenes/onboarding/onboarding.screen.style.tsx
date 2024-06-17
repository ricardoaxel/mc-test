import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  // Description Section
  descriptionSection: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 20,
  },
  descriptionTitle: {
    textAlign: 'center',
  },

  // Services Section
  servicesSection: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    flexWrap: 'wrap',
  },

  // Actions Section
  actionsSection: {
    gap: 15,
  },
});

export default styles;
