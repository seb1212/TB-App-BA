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

    goToNextScreen = () => {
      var responses = this.props.navigation.getParam('responses');
      var dimensions = this.props.navigation.getParam('dimensions');
      navigate('Report',{responses, dimensions});
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
