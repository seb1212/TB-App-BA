import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Text, CheckBox } from 'react-native-elements';
import apisauce from 'apisauce';
import { urls } from '../base/urls';
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import  { buttons } from '../styles/button';

export default class SendReportScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baseURL: urls.baseURL,
      postReport: urls.postReport,
      isCheckedStat: false,
      isCheckedCall: false,
      isDisabled: true,
      responses: this.props.navigation.getParam('responses'),
      dimensions: this.props.navigation.getParam('dimensions'),
      email: ''
    };
  };

  render() {

    const { navigate } = this.props.navigation;

    const api = apisauce.create({
      baseURL: this.state.baseURL,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Charset': 'UTF-8'
      },
      timeout: 15000,
    });

    postReport = () => {
      api
        .post(this.state.postReport, {responses: this.state.responses,dimensions: this.state.dimensions,
              email: this.state.email})
        .then((response) => console.log(response.data))
    };

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
        <TextInput
          style={texts.sendRepEmail}
          placeholder='exemple@exemple.ch'
          onChangeText={(text) => this.setState({email: text})}
        />
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
            fontWeight='bold'
            disabled={this.state.isDisabled}
            onPress={() => {postReport(),navigate('Welcome')}}
            title='Envoyer rapport'
        />
      </View>
    );
  }
}
