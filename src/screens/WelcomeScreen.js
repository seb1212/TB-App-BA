import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import ActionButton from "../components/ActionButton";
import { urls } from '../base/urls';
import { requests } from '../base/requests';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import  { buttons } from '../styles/button';


export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  };

  render() {
    // Navigation
    const { navigate } = this.props.navigation;

    // Valeurs de la table projet
    const BEFORE = 1; DURING = 2; AFTER = 3;
    // Titres des boutons
    const BTN_BEF_PROJ = 'Avant le projet'; BTN_DUR_PROJ = 'Pendant le projet'; BTN_AFT_PROJ = 'Après le projet';
    // Texte de bienvenue
    const TXT_WELCOME = "Bienvenue sur l'application qui vous permet d'évaluer l'intégration de Business Analyse dans votre projet";
    // Texte stade projet
    const TXT_PROJECT = "A quel stade du projet êtes-vous ?";
    // Paramètrage requête HTTP


    getQuestions = (infoProjet) => {
      requests.api
        .get(urls.getQuest, {infoProjet: infoProjet})
        .then((response) => {
          this.state.questions = response.data
          if (response.status == null || response.data == null)
            Alert.alert(
              'Problème de connexion',
              'Une erreur est survenue. Merci de vérifier votre connexion réseau et de réessayer'
            )
        })
      setTimeout( () => {goToNextScreen()},500)
    };

    goToNextScreen = () => {
      var questions = this.state.questions;
      navigate('Questionnaire',{questions});
    };

    return (
      <View style={containers.default}>
        <Text style={texts.welFirstTitle}>{ TXT_WELCOME }</Text>
        <Text style={texts.welSecondTitle}>{ TXT_PROJECT }</Text>
        <ActionButton
          buttonStyle={buttons.welDefault}
          onPress={() => getQuestions(BEFORE)}
          title={BTN_BEF_PROJ}
        />
        <ActionButton
          buttonStyle={buttons.welDefault}
          onPress={() => getQuestions(DURING)}
          title={BTN_DUR_PROJ}
        />
        <ActionButton
          buttonStyle={buttons.welLast}
          onPress={() => getQuestions(AFTER)}
          title={BTN_AFT_PROJ}
        />
      </View>
    );
  }
}
