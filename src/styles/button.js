

//Unused for the moment 08/09/18

import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const buttons = StyleSheet.create({
  project: {
    flex: 1,
  //color: 'black',
    backgroundColor: '#0000FF',
  //  height: responsiveHeight(10),
  //  width: responsiveWidth(100),
  },
  others: {
    flex: 1,
    color:'white',
    backgroundColor:'#0000FF',
    width:'100',
    fontSize: 15,
  }
});
