import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export const texts = StyleSheet.create({
  firstTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(5), // 10% of total screen size
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  secondTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    alignItems: 'center',
  },
});
