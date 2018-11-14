import React, { Component } from 'react';
import { View, TextInput, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import MyCheckbox from "../components/MyCheckbox";
import ActionButton from "../components/ActionButton";
import { urls } from '../base/urls';
import { requests } from '../base/requests';
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
    // Navigation
    const { navigate } = this.props.navigation;

    // Titres des boutons
    const BTN_SEND_REP = 'Envoyer rapport';
    // Texte info email
    const TXT_INFO_EMAIL = "Merci d'entrer votre email pour recevoir le rapport détaillé en pdf";
    // Texte email placeholder
    const TXT_EM_PLH = "exemple@exemple.ch";
    // Texte info collecte information
    const TXT_INFO_COLLECT = "Pour recevoir ce rapport, merci d'accepter les conditions de collecte de vos données";
    // Texte checkbox stat
    const TXT_CHB_STAT = "Acceptez-vous que vos réponses et votre email soient conservés à des fins statistiques ?";
    // Texte checkbox contact
    const TXT_CHB_CONTACT = "Souhaitez-vous être contacté pour un rapport plus détaillé ?";
    // Texte checkbox activité société
    const TXT_CHB_AD = "Souhaitez-vous recevoir des informations sur les activités de la société ?";


    postReport = () => {
      var contact = this.state.isCheckedCall ? 'oui' : 'non'
      var ad = this.state.isCheckedAd ? 'oui' : 'non'
      requests.api
        .post(urls.postReport, {responses: this.props.navigation.getParam('responses'),dimensions: this.props.navigation.getParam('dimensions'),
              email: this.state.email,contact: contact,ad: ad,level: this.props.navigation.getParam('level'),corr: this.props.navigation.getParam('corr'),
              scoreTot: this.props.navigation.getParam('scoreTot')})
        .then((response) => {
          var title = ''
          var msg = ''
          var txtOpOne = {}
          var txtOpTwo = {}
          var cancelable = true
          if (response.status == 200 && response.data == 'OK') {
            title = 'Email envoyé'
            msg = 'Voulez-vous refaire un questionnaire ?'
            txtOpOne = {text: 'Non', onPress: () => this.props.navigation.goBack(), style: 'cancel'}
            txtOpTwo = {text: 'Oui', onPress: () => navigate('Welcome')}
            cancelable = false
        }else if (response.data == 'Email NOK' || response.data == 'NOK'){
            title = 'Email non envoyé'
            msg = 'Merci de vérifier votre email'
            txtOpOne = {text: 'OK', onPress: () => {},style: 'cancel'}
        }else if (response.status == null || response.data == null || response.data == 'Erreur enregistrement rapport'){
            title = 'Email non envoyé'
            msg = 'Une erreur est survenue. Merci de vérifier votre connexion réseau et de réessayer.'
            txtOpOne = {text: 'OK', onPress: () => {},style: 'cancel'}
        }
        Alert.alert(title,msg,[txtOpOne,txtOpTwo],{cancelable: cancelable});
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
        <Text style={texts.sendRepTitle}>{ TXT_INFO_EMAIL }</Text>
        <TextInput
          style={texts.sendRepEmail}
          placeholder={ TXT_EM_PLH }
          onChangeText={(text) => this.setState({email: text})}
        />
        <Text style={texts.sendRepSubTitle}>{ TXT_INFO_COLLECT }</Text>
        <MyCheckbox
          title={ TXT_CHB_STAT }
          checked={this.state.isCheckedStat}
          onPress={() => changeStateChkStat()}
        />
        <MyCheckbox
          title={ TXT_CHB_CONTACT }
          checked={this.state.isCheckedCall}
          onPress={() => changeStateChkCall()}
        />
        <MyCheckbox
          title={ TXT_CHB_AD }
          checked={this.state.isCheckedAd}
          onPress={() => changeStateChkAd()}
        />
        <ActionButton
            buttonStyle={buttons.sendRep}
            disabled={this.state.isDisabled}
            onPress={() => postReport()}
            title={ BTN_SEND_REP }
        />
      </View>
    );
  }
}
