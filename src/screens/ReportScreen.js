import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import ActionButton from "../components/ActionButton";
import MyBadge from "../components/MyBadge";
import RadarChart from "../components/RadarChart";
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import  { buttons } from '../styles/button';

export default class ReportScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dimensions: this.props.navigation.getParam('dimensions'),
      scoreTot: this.props.navigation.getParam('scoreTot'),
      badgeColor: this.props.navigation.getParam('color'),
      corr: this.props.navigation.getParam('corr')
    };
  };

  render() {
    // Navigation
    const { navigate } = this.props.navigation;

    // Titres des boutons
    const BTN_ASK_REP = 'Demander rapport';
    // Niveau implémetation rapport
    const WELL = 'Bien'; MEDIUM = 'Moyen'; BAD = 'Insuffisant';
    // Texte score total
    const TXT_SCORE_TOT = "Note globale: ";
    // Texte cohérence
    const TXT_CORR = "Cohérence: ";
    // Texte info cohérence
    const TXT_INFO_CORR = "(0 étant le mieux et 1 le moins bien)";
    // Texte explication
    const TXT_EXPLAIN = "Explication : Vous pouvez demander un rapport plus détaillé en pdf par email";

    getLevel = () => {
      if (this.state.scoreTot >= 4) {
        return WELL
      }else if (this.state.scoreTot >= 3){
        return MEDIUM
      }else{
        return BAD
      }
    };

    goToNextScreen = () => {
      var level = getLevel()
      var responses = this.props.navigation.getParam('responses')
      var dimensions = this.state.dimensions
      var corr = this.state.corr
      var scoreTot = this.state.scoreTot
      navigate('SendReport',{responses, dimensions, corr, level, scoreTot})
    };

    return (
      <ScrollView
        contentContainerStyle={containers.repContentStyle} style={containers.repScroll}
        maximumZoomScale= {5}
        minimumZoomScale= {0}
      >
        <RadarChart dimValues={this.state.dimensions}/>
        <View style={containers.repScore}>
          <Text style={texts.repScore}>
            { TXT_SCORE_TOT }{this.state.scoreTot}
          </Text>
          <MyBadge badgeColor={this.state.badgeColor}/>
        </View>
        <Text style={texts.repCohe}>
          { TXT_CORR }{this.state.corr}
        </Text>
        <Text style={texts.repCohe}>{ TXT_INFO_CORR }</Text>
        <Text style={texts.repExpl}>{ TXT_EXPLAIN }</Text>
        <ActionButton
            buttonStyle={buttons.report}
            onPress={() => goToNextScreen()}
            title={ BTN_ASK_REP }
        />
      </ScrollView>
    );
  }
}
