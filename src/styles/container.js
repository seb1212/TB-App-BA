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
    marginTop: -25,
    marginBottom: -45,
  },
  questionnaireView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
    justifyContent: 'center',
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    marginTop: -25,
    marginBottom: -45,
  },
});
