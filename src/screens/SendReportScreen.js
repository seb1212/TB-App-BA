import React, { Component } from 'react';
import { View, TextInput, Alert } from 'react-native';
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
      isCheckedStat: false,
      isCheckedCall: false,
      isCheckedAd: false,
      isDisabled: true,
      email: ''
    };
  };

  render() {

    const { navigate } = this.props.navigation;

    const api = apisauce.create({
      baseURL: urls.baseURL,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Charset': 'UTF-8'
      },
      timeout: 8000,
    });

    postReport = () => {
      var contact = this.state.isCheckedCall ? 'oui' : 'non'
      var ad = this.state.isCheckedAd ? 'oui' : 'non'
      console.log('cont: '+contact+' ad: '+ad)
      api
        .post(urls.postReport, {responses: this.props.navigation.getParam('responses'),dimensions: this.props.navigation.getParam('dimensions'),
              email: this.state.email,contact: contact,ad: ad,level: this.props.navigation.getParam('level'),corr: this.props.navigation.getParam('corr'),
              scoreTot: this.props.navigation.getParam('scoreTot')})
        .then((response) => {
          var title = ''
          var msg = ''
          var txtOpOne = {}
          var txtOpTwo = {}
          var cancelable = true
          if (response.status == 200) {
            title = 'Email envoyé'
            msg = 'Voulez-vous refaire un questionnaire ?'
            txtOpOne = {text: 'Non', onPress: () => console.log('Non'), style: 'cancel'}
            txtOpTwo = {text: 'Oui', onPress: () => this.props.navigation.goBack()}
            cancelable = false
          //  txtOpOne = {text: 'Non', onPress: () => BackHandler.exitApp(), style: 'cancel'}
          //  txtOpTwo = {text: 'Oui', onPress: () => navigate('Welcome')}
        }else if (response.data == 'Email NOK' || response.data == 'NOK'){
            title = 'Email non envoyé'
            msg = 'Merci de vérifier votre email'
            txtOpOne = {text: 'OK', onPress: () => {},style: 'cancel'}
        }else if (response.status == null || response.data == null){
            title = 'Email non envoyé'
            msg = 'Une erreur est survenue. Merci de vérifier votre connexion réseau et de réessayer.'
            txtOpOne = {text: 'OK', onPress: () => {},style: 'cancel'}
          }else{
            title = 'else'
            msg = 'Une erreur est survenue. Merci de vérifier votre connexion réseau et de réessayer.'
            txtOpOne = {text: 'OK', onPress: () => {},style: 'cancel'}
          }
          console.log('data: '+response.data)
          console.log('status: '+response.status)
          Alert.alert(title,msg,[txtOpOne,txtOpTwo],{cancelable: cancelable}); //{ cancelable: false }
        })
    };

    stateButton = () => {
      if (this.state.isCheckedStat) {
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
    };

    changeStateChkAd = () => {
      this.setState({isCheckedAd: !this.state.isCheckedAd})
    };

    return (
      <View style={containers.default}>
        <Text style={texts.sendRepTitle}>
          Merci d'entrer votre email pour recevoir le rapport détaillé en pdf
        </Text>
        <TextInput
          style={texts.sendRepEmail}
          placeholder='exemple@exemple.ch'
          onChangeText={(text) => this.setState({email: text})}
        />
        <Text style={texts.sendRepSubTitle}>
          Pour recevoir ce rapport, merci d'accepter les conditions de collecte de vos données
        </Text>
        <CheckBox
          center
          title='Acceptez vous que vos réponses et votre email soient conservés à des fins statistiques ?'
          checked={this.state.isCheckedStat}
          onPress={() => changeStateChkStat()}
        />
        <CheckBox
          center
          title='Souhaitez-vous être contacté pour un rapport plus détaillé ?'
          checked={this.state.isCheckedCall}
          onPress={() => changeStateChkCall()}
        />
        <CheckBox
          center
          title='Souhaitez-vous recevoir des informations sur les activités de la société ?'
          checked={this.state.isCheckedAd}
          onPress={() => changeStateChkAd()}
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
            onPress={() => postReport()}
            title='Envoyer rapport'
        />
      </View>
    );
  }
}
