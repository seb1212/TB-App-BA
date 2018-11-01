import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export const texts = StyleSheet.create({
  welFirstTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(4), // 4% de la taille de l'écran
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
  queCommQuest: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
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
  launRepThank: {
    color: '#000000',
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -75,
    marginBottom: 50,
  },
  launRepClic: {
    color: '#000000',
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 100,
  },
  repScore: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginRight: 30
  },
  repCohe: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
  },
  repExpl: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  sendRepEmail: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    marginBottom: 40,
    height: 50,
    width: responsiveWidth(75),
    borderColor: 'gray',
    borderWidth: 1
  },
  sendRepTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
});
