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
      responses: this.props.navigation.getParam('responses'),
      dimensions: this.props.navigation.getParam('dimensions'),
      scoreTot: this.props.navigation.getParam('scoreTot'),
      badgeColor: this.props.navigation.getParam('color'),
      corr: this.props.navigation.getParam('corr')
    };
  };

  render() {

    const { navigate } = this.props.navigation;

    goToNextScreen = () => {
      var responses = this.state.responses;
      var dimensions = this.state.dimensions;
      navigate('SendReport',{responses, dimensions});
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
