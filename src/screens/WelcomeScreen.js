import React, { Component } from 'react';
import apisauce from 'apisauce';
import { Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import { baseUrl } from '../base/baseUrl';

export default class WelcomeScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;

    const api = apisauce.create({
      baseURL: baseUrl,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 15000,
    });

    goToNextScreen = () => {
      navigate('Questionnaire')
    };

    getQuestions = (infoProjet) => {
      api
        .get('/MonCode/GetQuestions.php', {infoProjet: infoProjet})
        .then((response) => response.data)
        .then(console.log);
      goToNextScreen()
    };

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
          onPress={ () => {getQuestions(1)} }
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
          onPress={ () => {getQuestions(2)} }
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
          onPress={ () => {getQuestions(3)} }
          title='Après le projet' />
      </View>
    );
  }
}
