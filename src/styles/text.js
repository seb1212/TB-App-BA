import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export const texts = StyleSheet.create({
  welFirstTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(4), // 4% de la taille de l'écran
    textAlign: 'center',
    textDecorationStyle: 'dotted', //'dotted', 'dashed'
    marginTop: 0,
    marginBottom: 30,
    width: responsiveWidth(95)
  },
  welSecondTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    textDecorationStyle: 'dotted',
    marginBottom: 30,
    width: responsiveWidth(95)
  },
  queNumQuest: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textDecorationStyle: 'dotted',
    textAlign: 'center',
    marginTop: 10
  },
  queContQuest: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    textDecorationStyle: 'dotted',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  queCommQuest: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    textDecorationStyle: 'dotted',
    textAlign: 'center',
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10
  },
  queScore: {
    color: '#000000',
    fontSize: responsiveFontSize(4),
    textDecorationStyle: 'dotted',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  queSmallTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    textDecorationStyle: 'dotted',
    textAlign: 'center',
    marginBottom: 1,
    marginLeft: 10,
    marginRight: 10
  },
  launRepThank: {
    color: '#000000',
    fontSize: responsiveFontSize(4),
    textDecorationStyle: 'dotted',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
    width: responsiveWidth(95),
  },
  launRepClic: {
    color: '#000000',
    fontSize: responsiveFontSize(4),
    textDecorationStyle: 'dotted',
    textAlign: 'center',
    marginBottom: 40,
    width: responsiveWidth(95),
  },
  repScore: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    textDecorationStyle: 'dotted',
    fontWeight: 'bold',
    marginRight: 30
  },
  repCohe: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    textDecorationStyle: 'dotted',
    textAlign: 'center',
  },
  repExpl: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    textDecorationStyle: 'dotted',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    width: responsiveWidth(95)
  },
  sendRepEmail: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    textDecorationStyle: 'dotted',
    textAlign: 'center',
    marginBottom: 10,
    height: 50,
    width: responsiveWidth(90),
    borderColor: 'blue',
    borderRadius: 25,
    borderWidth: 2
  },
  sendRepTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    textDecorationStyle: 'dotted',
    textAlign: 'center',
    marginBottom: 10,
  },
  sendRepSubTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    textDecorationStyle: 'dotted',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: responsiveWidth(90)
  },
});
