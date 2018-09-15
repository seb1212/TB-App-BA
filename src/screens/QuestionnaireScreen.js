import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Slider, Text } from 'react-native-elements';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';



export default class QuestionnaireScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const questions = navigation.getParam('questions');

    var report = [];
    var cpt = 1;

    return (
      <View style={containers.questionnaireView}>
        <Text h2 style={texts.firstTitle}>
            Question {cpt}/{questions.length}
        </Text>
        <Text h1 style={texts.secondTitle}>{questions[0].que_contenu}</Text>
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState({value})} />
        <Text h3>Réponse : {this.state.value}</Text>
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
