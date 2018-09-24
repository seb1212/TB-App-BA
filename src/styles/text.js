import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export const texts = StyleSheet.create({
  welFirstTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(4), // 10% of total screen size
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -50,
    marginBottom: 25,
  },
  welSecondTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  queNumQuest: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  queContQuest: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  queScore: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  queSmallTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginBottom: 1,
  },
});
