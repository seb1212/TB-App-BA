import React from 'react';
import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from "../screens/WelcomeScreen";
import QuestionnaireScreen from "../screens/QuestionnaireScreen";
import ReportScreen from "../screens/ReportScreen";
import InformationScreen from "../screens/InformationScreen";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const stackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Bienvenue',
      headerStyle: {
        backgroundColor: '#4169E1',
      },
      headerTitleStyle: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        color: 'white'
      },
      headerTintColor: 'white',
    }),
  },
  Questionnaire: {
    screen: QuestionnaireScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Questionnaire',
      headerStyle: {
        backgroundColor: '#4169E1',
      },
      headerTitleStyle: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        color: 'white'
      },
      headerTintColor: 'white',
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
