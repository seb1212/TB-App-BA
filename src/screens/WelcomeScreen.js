import React, { Component } from 'react';
import { Text, View } from 'react-native';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import { Button } from 'react-native-elements';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


export default class WelcomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={containers.welcomeView}>
        <Text style={texts.firstTitle}>
          Bienvenue sur l'application qui vous
          permet d'évaluer l'intégration de Business Analyse
          dans votre projet
        </Text>
        <Text style={texts.secondTitle}>
          A quel stade du projet êtes-vous ?
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
          onPress={() => navigate('Questionnaire')}
          title='Avant le projet' />
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
          title='Pendant le projet' />
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
          title='Après le projet' />
      </View>
    );
  }
}
