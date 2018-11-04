import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Badge, Text } from 'react-native-elements';
import RadarChart from "../components/RadarChart";
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import  { buttons } from '../styles/button';

//const {height, width} = Dimensions.get(window);

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

    const { navigate } = this.props.navigation;

    getLevel = () => {
      if (this.state.scoreTot >= 4) {
        return 'Bien'
      }else if (this.state.scoreTot >= 3){
        return 'Moyen'
      }else{
        return 'Insuffisant'
      }
    };

    goToNextScreen = () => {
      var level = getLevel()
      var responses = this.props.navigation.getParam('responses')
      var dimensions = this.state.dimensions
      var corr = this.state.corr
      var scoreTot = this.state.scoreTot
      console.log('scoreTot: '+scoreTot)
      navigate('SendReport',{responses, dimensions, corr, level, scoreTot})
    };

    return (
      <ScrollView contentContainerStyle={containers.repContentStyle} style={containers.repScroll}>
        <RadarChart dimValues={this.state.dimensions}/>
        <View style={containers.repScore}>
          <Text style={texts.repScore}>
            Note globale : {this.state.scoreTot}
          </Text>
          <Badge containerStyle={{ backgroundColor: this.state.badgeColor, height: 30, width: 30}}/>
        </View>
        <Text style={texts.repCohe}>
          Cohérence : {this.state.corr}
        </Text>
        <Text style={texts.repCohe}>
          (0 étant le mieux et 1 le moins bien)
        </Text>
        <Text style={texts.repExpl}>
          Explication : Vous pouvez demander un rapport plus détaillé en pdf par email
        </Text>
        <Button
            buttonStyle={buttons.report}
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
            title='Demander rapport'
        />
      </ScrollView>
    );
  }
}
