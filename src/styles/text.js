import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export const texts = StyleSheet.create({
  firstTitle: {
    color: '#000000',
  //  fontSize: responsiveFontSize(5), // 10% of total screen size
  //  height: responsiveHeight(10),
  //  width: responsiveWidth(100),
    textAlign: 'center',
  //  justifyContent: 'center',
  //  alignItems: 'center'
  },
  secondTitle: {
    color: '#000000',
    textAlign: 'center',
//    fontSize: responsiveFontSize(2),
  },
});
