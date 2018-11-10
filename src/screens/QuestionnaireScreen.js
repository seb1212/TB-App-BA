import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import ActionButton from "../components/ActionButton";
import MySlider from "../components/MySlider";
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import  { buttons } from '../styles/button';

export default class QuestionnaireScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 1,
      questions: this.props.navigation.getParam('questions'),
      responses: [],
      cptArrayQuest: 0,
      cptNumQuest: 1,
      cptBes: 0,
      sumBes: 0,
      cptPP: 0,
      sumPP: 0,
      cptCha: 0,
      sumCha: 0,
      cptVal: 0,
      sumVal: 0,
      cptCon: 0,
      sumCon: 0,
      cptSol: 0,
      sumSol: 0,
      sumTot: 0
    };
  };

  render() {
    // Navigation
    const { navigate } = this.props.navigation;

    // Titres des boutons
    const BTN_VAL = 'Valider';
    // Texte info curseur
    const TXT_INFO_SLIDER = "Veuillez donner une note en bougeant le curseur";
    // Texte info score
    const TXT_INFO_SCORE = "(1 étant la plus basse et 5 la plus haute)";
    // Texte question
    const TXT_QUEST = "Question   ";
    // Texte score
    const TXT_SCORE = "Note: ";

    returnValue = (sum,cpt) => {
      if ((sum>0) || (cpt>0)) {
        var res = sum/cpt
        return res.toFixed(1)
      }else{
        return 0
      }
    };

    createTabDim = () => {
      return [
        {
          'Contexte': returnValue(this.state.sumCon,this.state.cptCon),
          'Solutions': returnValue(this.state.sumSol,this.state.cptSol),
          'Changement': returnValue(this.state.sumCha,this.state.cptCha),
          'Besoins': returnValue(this.state.sumBes,this.state.cptBes),
          'Parties prenantes': returnValue(this.state.sumPP,this.state.cptPP),
          'Valeurs': returnValue(this.state.sumVal,this.state.cptVal)
        }
      ]
    };

    getNextQuestion = () => {
      if (this.state.cptNumQuest == this.state.questions.length) {
        var scoreTot = (this.state.sumTot/this.state.questions.length).toFixed(1)
        var responses = this.state.responses
        var dimensions = createTabDim()
        navigate('LaunchReport',{responses, dimensions, scoreTot})
      }else{
        this.state.cptNumQuest++
        this.state.cptArrayQuest++
        this.setState({score: 1})
      }
    };

    saveDimScore = () => {
      switch (this.state.questions[this.state.cptArrayQuest].type) {
        case 'Besoins':
          this.state.cptBes++;
          this.state.sumBes+= this.state.score;
          break;
        case 'Parties prenantes':
          this.state.cptPP++;
          this.state.sumPP+= this.state.score;
          break;
        case 'Changement':
          this.state.cptCha++;
          this.state.sumCha+= this.state.score;
          break;
        case 'Valeurs':
          this.state.cptVal++;
          this.state.sumVal+= this.state.score;
          break;
        case 'Contexte':
          this.state.cptCon++;
          this.state.sumCon+= this.state.score;
          break;
        case 'Solutions':
          this.state.cptSol++;
          this.state.sumSol+= this.state.score;
          break;
      }
    };

    saveScore = () => {
      saveDimScore();
      this.state.sumTot+= this.state.score
      this.state.responses.push({questions: this.state.questions[this.state.cptArrayQuest], score: this.state.score})
    };

    return (
      <View style={containers.questionnaire}>
        <Text style={texts.queNumQuest}>
          {TXT_QUEST}{this.state.cptNumQuest}/{this.state.questions.length}
        </Text>
        <View style={containers.default}>
          <Text style={texts.queContQuest}>
            {this.state.questions[this.state.cptArrayQuest].content}
          </Text>
        </View>
        <Text style={texts.queCommQuest}>{this.state.questions[this.state.cptArrayQuest].comment}</Text>
        <Text style={texts.queScore}>{TXT_SCORE}{this.state.score}</Text>
        <MySlider
          value={this.state.score}
          onValueChange={(score) => this.setState({score})}
        />
        <Text style={texts.queSmallTitle}>{ TXT_INFO_SLIDER }</Text>
        <Text style={texts.queSmallTitle}>{ TXT_INFO_SCORE }</Text>
        <ActionButton
          buttonStyle={buttons.quest}
          onPress={() => {saveScore(),getNextQuestion()}}
          title={ BTN_VAL }
        />
      </View>
    );
  }
}
