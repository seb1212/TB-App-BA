import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import ActionButton from "../components/ActionButton";
import  { containers } from '../styles/container';
import  { texts } from '../styles/text';
import  { buttons } from '../styles/button';

export default class LaunchReportScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responses: this.props.navigation.getParam('responses'),
      grBPP_PPB: [],
      grBCh_ChB: [],
      grBV_VB: [],
      grBCo_CoB: [],
      grBS_SB: [],
      grPPCh_ChPP: [],
      grPPV_VPP: [],
      grPPCo_CoPP: [],
      grPPS_SPP: [],
      grChV_VCh: [],
      grChCo_CoCh: [],
      grChS_SCh: [],
      grVCo_CoV: [],
      grVS_SV: [],
      grCoS_SCo: [],
      cptNbGroups: 0,
      res: 0
    };
  };

  render() {
    // Navigation
    const { navigate } = this.props.navigation;

    // Titres des boutons
    const BTN_REPORT = 'Rapport';
    // Ecart maximum entre les scores
    const DIFFERENCE_MAX = 4;
    // Couleur du badge
    const GREEN = 'green'; ORANGE = 'orange'; RED = 'red';
    // Texte remerciement
    const TXT_THANKS = "Nous vous remerçions d'avoir rempli le questionnaire.";
    // Texte info action
    const TXT_INFO_ACT = "Pour visualiser le rapport de votre questionnaire, merci de cliquer sur le bouton ci-dessous.";

    getCorrelationQuestions = () => {
      var idQ = 0
      var score = 0
      for (var i=0; i<this.state.responses.length; i++) {
        switch (this.state.responses[i].questions.type) {
          case 'Besoins':
            switch (this.state.responses[i].questions.relation) {
              case 'Parties prenantes':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grBPP_PPB.push(score)
                break;
              case 'Changement':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grBCh_ChB.push(score)
                break;
              case 'Valeurs':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grBV_VB.push(score)
                break;
              case 'Contexte':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grBCo_CoB.push(score)
                break;
              case 'Solutions':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grBS_SB.push(score)
                break;
            }
            break;
          case 'Parties prenantes':
            switch (this.state.responses[i].questions.relation) {
              case 'Besoins':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grBPP_PPB.push(score)
                break;
              case 'Changement':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grPPCh_ChPP.push(score)
                break;
              case 'Valeurs':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grPPV_VPP.push(score)
                break;
              case 'Contexte':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grPPCo_CoPP.push(score)
                break;
              case 'Solutions':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grPPS_SPP.push(score)
                break;
            }
            break;
          case 'Changement':
            switch (this.state.responses[i].questions.relation) {
              case 'Parties prenantes':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grPPCh_ChPP.push(score)
                break;
              case 'Besoins':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grBCh_ChB.push(score)
                break;
              case 'Valeurs':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grChV_VCh.push(score)
                break;
              case 'Contexte':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grChCo_CoCh.push(score)
                break;
              case 'Solutions':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grChS_SCh.push(score)
                break;
            }
            break;
          case 'Valeurs':
            switch (this.state.responses[i].questions.relation) {
              case 'Parties prenantes':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grPPV_VPP.push(score)
                break;
              case 'Changement':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grChV_VCh.push(score)
                break;
              case 'Besoins':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grBV_VB.push(score)
                break;
              case 'Contexte':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grVCo_CoV.push(score)
                break;
              case 'Solutions':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grVS_SV.push(score)
                break;
            }
            break;
          case 'Contexte':
            switch (this.state.responses[i].questions.relation) {
              case 'Parties prenantes':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grPPCo_CoPP.push(score)
                break;
              case 'Changement':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grChCo_CoCh.push(score)
                break;
              case 'Valeurs':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grVCo_CoV.push(score)
                break;
              case 'Besoins':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grBCo_CoB.push(score)
                break;
              case 'Solutions':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grCoS_SCo.push(score)
                break;
            }
            break;
          case 'Solutions':
            switch (this.state.responses[i].questions.relation) {
              case 'Parties prenantes':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grPPS_SPP.push(score)
                break;
              case 'Changement':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grChS_SCh.push(score)
                break;
              case 'Valeurs':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grVS_SV.push(score)
                break;
              case 'Contexte':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grCoS_SCo.push(score)
                break;
              case 'Besoins':
                idQ = this.state.responses[i].questions.number
                score = this.state.responses[i].score
                this.state.grBS_SB.push(score)
                break;
            }
            break;
        }
      }
    };

    getCorrelationReport = () => {
      if (this.state.grBPP_PPB.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grBPP_PPB)-Math.min(...this.state.grBPP_PPB)
      }
      if (this.state.grBCh_ChB.length > 0) {
        this.state.res+= Math.max(...this.state.grBCh_ChB)-Math.min(...this.state.grBCh_ChB)
        this.state.cptNbGroups++
      }
      if (this.state.grBV_VB.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grBV_VB)-Math.min(...this.state.grBV_VB)
      }
      if (this.state.grBCo_CoB.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grBCo_CoB)-Math.min(...this.state.grBCo_CoB)
      }
      if (this.state.grBS_SB.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grBS_SB)-Math.min(...this.state.grBS_SB)
      }
      if (this.state.grPPCh_ChPP.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grPPCh_ChPP)-Math.min(...this.state.grPPCh_ChPP)
      }
      if (this.state.grPPV_VPP.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grPPV_VPP)-Math.min(...this.state.grPPV_VPP)
      }
      if (this.state.grPPCo_CoPP.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grPPCo_CoPP)-Math.min(...this.state.grPPCo_CoPP)
      }
      if (this.state.grPPS_SPP.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grPPS_SPP)-Math.min(...this.state.grPPS_SPP)
      }
      if (this.state.grChV_VCh.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grChV_VCh)-Math.min(...this.state.grChV_VCh)
      }
      if (this.state.grChCo_CoCh.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grChCo_CoCh)-Math.min(...this.state.grChCo_CoCh)
      }
      if (this.state.grChS_SCh.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grChS_SCh)-Math.min(...this.state.grChS_SCh)
      }
      if (this.state.grVCo_CoV.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grVCo_CoV)-Math.min(...this.state.grVCo_CoV)
      }
      if (this.state.grVS_SV.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grVS_SV)-Math.min(...this.state.grVS_SV)
      }
      if (this.state.grCoS_SCo.length > 0) {
        this.state.cptNbGroups++
        this.state.res+= Math.max(...this.state.grCoS_SCo)-Math.min(...this.state.grCoS_SCo)
      }
      if (this.state.cptNbGroups > 0) {
        var worthRes = DIFFERENCE_MAX * this.state.cptNbGroups
        this.state.res = (this.state.res/worthRes).toFixed(1)
      }else{
        this.state.res = 0
      }
    };

    getBadgeColor = (scoreTot) => {
      if (scoreTot >= 4) {
        return GREEN
      }else if (scoreTot >= 3){
        return ORANGE
      }else{
        return RED
      }
    };

    goToNextScreen = () => {
      getCorrelationQuestions()
      getCorrelationReport()
      var responses = this.state.responses
      var dimensions = this.props.navigation.getParam('dimensions')
      var scoreTot = this.props.navigation.getParam('scoreTot')
      var color = getBadgeColor(scoreTot)
      var corr = this.state.res
      navigate('Report',{responses, dimensions, scoreTot, color, corr});
    };

    return (
      <View style={containers.default}>
        <Text style={texts.launRepThank}>{ TXT_THANKS }</Text>
        <Text style={texts.launRepClic}>{ TXT_INFO_ACT }</Text>
        <View style={containers.default}>
          <ActionButton
            buttonStyle={buttons.launRep}
            onPress={() => goToNextScreen()}
            title={ BTN_REPORT }
          />
        </View>
      </View>
    );
  }
}
