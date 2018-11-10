import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const containers = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(100),
    width: responsiveWidth(100),
  },
  questionnaire: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
    justifyContent: 'center',
    height: responsiveHeight(100),
    width: responsiveWidth(100),
  },
  repScrollContentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  repScroll: {
    backgroundColor: '#FFFFFF',
    height: responsiveHeight(100),
    width: responsiveWidth(100),
  },
  repScore: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20
  }
});
