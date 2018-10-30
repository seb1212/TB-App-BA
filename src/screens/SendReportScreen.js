import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Text, CheckBox } from 'react-native-elements';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import  { buttons } from '../styles/button';

export default class SendReportScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCheckedStat: false,
      isCheckedCall: false,
      isDisabled: true
    };
  };

  render() {

    const { navigate } = this.props.navigation;

    stateButton = () => {
      if (this.state.isCheckedCall && this.state.isCheckedStat) {
        this.setState({isDisabled: false})
      }else{
        this.setState({isDisabled: true})
      }
    };

    changeStateChkStat = () => {
      this.setState({isCheckedStat: !this.state.isCheckedStat})
      setTimeout( () => {stateButton()},100)
    };

    changeStateChkCall = () => {
      this.setState({isCheckedCall: !this.state.isCheckedCall})
      setTimeout( () => {stateButton()},100)
    };

    return (
      <View style={containers.default}>
        <Text style={texts.sendRepEmail}>
          Merci d'entrer votre email ci-dessous
        </Text>
        <TextInput style={texts.sendRepEmail} placeholder='exemple@exemple.ch'/>
        <CheckBox
          center
          title='Click Here to Remove This Item'
          checked={this.state.isCheckedStat}
          onPress={() => changeStateChkStat()}
        />
        <CheckBox
          center
          title='Click Here to Remove This Item'
          checked={this.state.isCheckedCall}
          onPress={() => changeStateChkCall()}
        />
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
            onPress={() => navigate('Welcome')}
            fontWeight='bold'
            title='Envoyer rapport'
            disabled={this.state.isDisabled}
        />
      </View>
    );
  }
}
