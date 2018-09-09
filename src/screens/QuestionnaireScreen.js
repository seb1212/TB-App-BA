import React, { Component } from 'react';
import { Text, View } from 'react-native';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import { Button, Slider } from 'react-native-elements';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


export default class QuestionnaireScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={containers.questionnaireView}>
        <Text style={texts.firstTitle}>
            Question 1/20
        </Text>
        <Text style={texts.secondTitle}>
          Pourquoi avez-vous fait ce projet ?
        </Text>
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState({value})} />
        <Text>Value: {this.state.value}</Text>
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
          onPress={() => navigate('Report')}
          title='Valider' />
      </View>
    );
  }
}
