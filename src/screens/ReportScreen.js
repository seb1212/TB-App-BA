import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Badge } from 'react-native-elements';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import  { buttons } from '../styles/button';


export default class ReportScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={containers.default}>
        <Text style={texts.repText}>
          Graphique
        </Text>
        <Text style={texts.repScore}>
          Note globale : 4   <Badge containerStyle={{ backgroundColor: 'green' }} />
        </Text>
        <Text style={texts.repCohe}>
          Cohérence : 1
        </Text>
        <Text style={texts.repExpl}>
          Explication : Le résultat représente une bonne implémentation de la BA dans votre projet
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
          onPress={() => navigate('Information')}
          title='Envoyer rapport' />
      </View>
    );
  }
}
