import React, { Component } from 'react';
import apisauce from 'apisauce';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import  { buttons } from '../styles/button';
import { urls } from '../base/urls';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: urls.baseURL,
      getQuest: urls.getQuest
    };
  };
  render() {

    const { navigate } = this.props.navigation;

    // constantes qui représentent la valeur de attribut projet
    const BEFORE = 1; DURING = 2; AFTER = 3;

    // constantes qui représentent les titres des boutons
    const BEF_PROJ = 'Avant le projet'; DUR_PROJ = 'Pendant le projet'; AFT_PROJ = 'Après le projet';

    const api = apisauce.create({
      baseURL: this.state.baseURL,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Charset': 'UTF-8'
      },
      timeout: 15000,
    });

    var questions = [];

    getQuestions = (infoProjet) => {
      api
        .get(this.state.getQuest, {infoProjet: infoProjet})
        .then((response) => questions = response.data)
      setTimeout( () => {goToNextScreen()},500)
    };

    goToNextScreen = () => {
      navigate('Questionnaire',{questions});
    };

    return (
      <View style={containers.welcomeView}>
        <Text style={texts.welFirstTitle}>
          Bienvenue sur l'application qui vous
          permet d'évaluer l'intégration de Business Analyse
          dans votre projet
        </Text>
        <Text style={texts.welSecondTitle}>
          A quel stade du projet êtes-vous ?
        </Text>
        <Button
          buttonStyle={buttons.welDefault}
          containerViewStyle={{backgroundColor: 'transparent'}}
          large
          raised
          rounded
          color='white'
          fontWeight='bold'
          onPress={() => getQuestions(BEFORE)}
          title={BEF_PROJ}
        />
        <Button
          buttonStyle={buttons.welDefault}
          containerViewStyle={{backgroundColor: 'transparent'}}
          large
          raised
          rounded
          color='white'
          fontWeight='bold'
          onPress={() => getQuestions(DURING)}
          title={DUR_PROJ}
        />
        <Button
          buttonStyle={buttons.welLast}
          containerViewStyle={{backgroundColor: 'transparent'}}
          large
          raised
          rounded
          color='white'
          fontWeight='bold'
          onPress={() => getQuestions(AFTER)}
          title={AFT_PROJ}
        />
      </View>
    );
  }
}
