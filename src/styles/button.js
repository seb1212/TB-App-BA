import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const buttons = StyleSheet.create({
  welDefault: {
    backgroundColor:'#0000FF',
    width: responsiveWidth(60),
    height: responsiveHeight(10),
    marginBottom: 25,
  },
  welLast: {
    backgroundColor:'#0000FF',
    width: responsiveWidth(60),
    height: responsiveHeight(10),
    marginBottom: 20,
  },
  quest: {
    backgroundColor:'#0000FF',
    width: responsiveWidth(60),
    height: responsiveHeight(10),
    marginTop: 20,
    marginBottom: 20,
  },
  launRep: {
    backgroundColor:'#0000FF',
    width: responsiveWidth(60),
    height: responsiveHeight(10),
    marginBottom: 20,
  },
  report: {
    backgroundColor:'#0000FF',
    width: responsiveWidth(60),
    height: responsiveHeight(10),
    marginBottom: 20,
  },
  sendRep: {
    backgroundColor:'#0000FF',
    width: responsiveWidth(60),
    height: responsiveHeight(10),
    marginBottom: 10,
  },
});
