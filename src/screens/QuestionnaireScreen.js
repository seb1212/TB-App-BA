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
      cptArrayQuest: 0,
      cptNumQuest: 1,
      titleButton: 'Valider',
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const questions = navigation.getParam('questions');

    // constantes qui représentent le libellé du bouton
    const VALIDATE = 'Valider'; REPORT = 'Rapport';

    var report = [];

    getNextQuestion = () => {
      this.state.titleButton == VALIDATE ? refreshState() : navigate('Report')
    };

    refreshState = () => {
      this.state.cptNumQuest++
      this.state.cptArrayQuest++
      this.state.cptNumQuest == questions.length ? this.setState({titleButton: REPORT}) : ""
      this.setState({value: 1})
    }

    return (
      <View style={containers.questionnaireView}>
        <Text h2 style={texts.firstTitle}>
            Question {this.state.cptNumQuest}/{questions.length}
        </Text>
        <Text h1 style={texts.secondTitle}>{questions[this.state.cptArrayQuest].que_contenu}</Text>
        <Text h4 style={texts.secondTitle}>Veuillez mettre une note en bougeant le curseur</Text>
        <Slider
          minimumValue={1}
          maximumValue={5}
          step={1}
          animateTransitions={true}
          thumbStyle={{
            "backgroundColor": "#0000FF",
            "position": "absolute",
            "width": 25,
            "height": 50,
            "borderRadius": 10,
            "top": 22,
          }}
          minimumTrackTintColor={'#32CD32'}
          value={this.state.value}
          onValueChange={(value) => this.setState({value})}
        />
        <Text h5 style={texts.secondTitle}>(1 étant la plus basse et 5 la plus haute)</Text>
        <Text h3 style={texts.secondTitle}>Note: {this.state.value}</Text>
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
          onPress={() => getNextQuestion()}
          title={this.state.titleButton}
        />
      </View>
    );
  }
}
