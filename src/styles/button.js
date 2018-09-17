import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const buttons = StyleSheet.create({
  default: {
    backgroundColor:'#0000FF',
    width: responsiveWidth(60),
    height: responsiveHeight(10),
    marginBottom: 25,
  },
  last: {
    backgroundColor:'#0000FF',
    width: responsiveWidth(60),
    height: responsiveHeight(10),
    marginBottom: 0,
  },
  questionnaire: {
    backgroundColor:'#0000FF',
    width: responsiveWidth(60),
    height: responsiveHeight(10),
  },
});
