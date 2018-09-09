import React from 'react';
import WelcomeScreen from "../screens/WelcomeScreen";
import QuestionnaireScreen from "../screens/QuestionnaireScreen";
import ReportScreen from "../screens/ReportScreen";
import InformationScreen from "../screens/InformationScreen";
import { createStackNavigator } from 'react-navigation';

const stackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Bienvenue',
    }),
  },
  Questionnaire: {
    screen: QuestionnaireScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Questionnaire',
    }),
  },
  Report: {
    screen: ReportScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Rapport',
    }),
  },
  Information: {
    screen: InformationScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Envoyer le rapport',
    }),
  },
});

export default stackNavigator;
