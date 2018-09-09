import React, { Component } from 'react';
import { Text, View } from 'react-native';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import { Button, Badge } from 'react-native-elements';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


export default class ReportScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={containers.welcomeView}>
        <Text style={texts.firstTitle}>
          Graphique
        </Text>
        <Text style={texts.firstTitle}>
          Corrélation : 1
        </Text>
        <Text style={texts.secondTitle}>
          Niveau d'implémentation :
        </Text>
        <Badge containerStyle={{ backgroundColor: 'green'}} />
        <Text style={texts.secondTitle}>
          Explication : bla bla bla
        </Text>
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
          onPress={() => navigate('Information')}
          title='Envoyer rapport' />
      </View>
    );
  }
}
