import React, { Component } from 'react';
import apisauce from 'apisauce';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import { baseUrl } from '../base/baseUrl';

export default class WelcomeScreen extends Component {
  
  render() {

    const { navigate } = this.props.navigation;

    // constantes qui représentent la valeur de attribut projet
    const BEFORE = 1; DURING = 2; AFTER = 3;

    const api = apisauce.create({
      baseURL: baseUrl,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 15000,
    });

    var questions = [];

    getQuestions = (infoProjet) => {
      api
        .get('/MonCode/GetQuestions.php', {infoProjet: infoProjet})
        .then((response) => questions = response.data)
      setTimeout( () => {goToNextScreen()},500);
    };

    goToNextScreen = () => {
      navigate('Questionnaire',{questions});
    };

    return (
      <View style={containers.welcomeView}>
        <Text h2 style={texts.firstTitle}>
          Bienvenue sur l'application qui vous
          permet d'évaluer l'intégration de Business Analyse
          dans votre projet
        </Text>
        <Text h4 style={texts.secondTitle}>
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
          onPress={() => getQuestions(BEFORE)}
          title='Avant le projet'
        />
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
          onPress={() => getQuestions(DURING)}
          title='Pendant le projet'
        />
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
          onPress={() => getQuestions(AFTER)}
          title='Après le projet'
        />
      </View>
    );
  }
}
