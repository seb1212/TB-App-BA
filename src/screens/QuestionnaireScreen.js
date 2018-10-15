import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Slider, Text } from 'react-native-elements';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import  { buttons } from '../styles/button';

export default class QuestionnaireScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 1,
      responses: [],
      cptArrayQuest: 0,
      cptNumQuest: 1,
      refreshing: false,
      titleButton: 'Valider',
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const questions = navigation.getParam('questions');

    getNextQuestion = () => {
      refreshState()
    };

    refreshState = () => {
      if (this.state.cptNumQuest == questions.length) {
        navigate('LaunchReport')
      }else{
        this.state.cptNumQuest++
        this.state.cptArrayQuest++
        this.setState({score: 1})
      }
    };

    saveScore = () => {
      this.state.responses.push({id: questions[this.state.cptArrayQuest].number,score: this.state.score});
    };

    return (
      <View style={containers.questionnaire}>
        <Text style={texts.queNumQuest}>
            Question {this.state.cptNumQuest}/{questions.length}
        </Text>
        <Text style={texts.queContQuest}>
          {questions[this.state.cptArrayQuest].content}
        </Text>
        <Text style={texts.queCommQuest}>Comment question</Text>
        <Text style={texts.queScore}>Note: {this.state.score}</Text>
        <Slider
          style={{
            marginTop: 25,
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
          }}
          minimumValue={1}
          maximumValue={5}
          step={1}
          animateTransitions={true}
          thumbStyle={{
            backgroundColor: '#708090',
            position: 'absolute',
            width: 25,
            height: 50,
            borderRadius: 25,
            top: 22,
          }}
          minimumTrackTintColor={'#32CD32'}
          value={this.state.score}
          onValueChange={(score) => this.setState({score})}
        />
        <Text style={texts.queSmallTitle}>Veuillez donner une note en bougeant le curseur</Text>
        <Text style={texts.queSmallTitle}>(1 étant la plus basse et 5 la plus haute)</Text>
        <Button
          buttonStyle={buttons.quest}
          containerViewStyle={{
            backgroundColor: 'transparent',
            alignItems: 'center',
          }}
          large
          raised
          rounded
          color='white'
          fontWeight='bold'
          onPress={() => {saveScore(),getNextQuestion()}}
          title={this.state.titleButton}
        />
      </View>
    );
  }
}
