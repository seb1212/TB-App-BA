import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const containers = StyleSheet.create({
  welcomeView: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    alignItems: 'center',
    justifyContent: 'center',
//    height: responsiveHeight(10), // 100% of screen height
//    width: responsiveWidth(100),
  },
  questionnaireView: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    alignItems: 'stretch',
    justifyContent: 'center',
  //  height: responsiveHeight(100), // 100% of screen height
  //  width: responsiveWidth(100),
  },
});
