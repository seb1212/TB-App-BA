import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import { Button, Input } from 'react-native-elements';

import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


export default class InformationScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={containers.welcomeView}>
        <Text style={texts.secondTitle}>
          Merci d'entrer votre email ci-dessous
        </Text>
        <TextInput placeholder='exemple@exemple.ch'/>
        <Button
          buttonStyle={{
            backgroundColor:'#0000FF',
            width: responsiveWidth(90),
            height: responsiveHeight(10),
          }}
          large
          raised
          rounded
          color='black'
          onPress={() => navigate('Welcome')}
          title='Envoyer' />
      </View>
    );
  }
}
