import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


export default class ActionButton extends Component {
  render() {
    return (<Button
              buttonStyle={{
                backgroundColor:'#0000FF',
                width: responsiveWidth(90),
                height: responsiveHeight(10),
              }}
              large
              raised
              rounded
              color='black'
              title='Avant le projet' />
    );
  }
}
