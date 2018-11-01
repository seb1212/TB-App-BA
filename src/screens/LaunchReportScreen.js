import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import  { buttons } from '../styles/button';

export default class LaunchReportScreen extends Component {
  constructor(props) {
    super(props);
  };

  render() {

    const { navigate } = this.props.navigation;

    getBadgeColor = (scoreTot) => {
      if (scoreTot >= 4) {
        return 'green'
      }else if (scoreTot >= 3){
        return 'orange'
      }else{
        return 'red'
      }
    };

    goToNextScreen = () => {
      var responses = this.props.navigation.getParam('responses')
      var dimensions = this.props.navigation.getParam('dimensions')
      var scoreTot = this.props.navigation.getParam('scoreTot')
      var color = getBadgeColor(scoreTot)
      navigate('Report',{responses, dimensions, scoreTot, color});
    };

    return (
      <View style={containers.default}>
        <Text style={texts.launRepThank}>
          Merci d'avoir rempli le questionnaire.
        </Text>
        <Text style={texts.launRepClic}>
          Veuillez cliquer sur le bouton pour visualiser le rapport.
        </Text>
        <Button
          buttonStyle={buttons.launRep}
          containerViewStyle={{
            backgroundColor: 'transparent',
            alignItems: 'center',
          }}
          large
          raised
          rounded
          color='white'
          fontWeight='bold'
          onPress={() => goToNextScreen()}
          title={'Rapport'}
        />
      </View>
    );
  }
}
