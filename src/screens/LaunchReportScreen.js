import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
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

    const { navigate } = this.props.navigation;

    getCorrelationQuestions = () => {
      var idQ = ""
      var score = ""
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
      console.log(this.state.grBCh_ChB)
      console.log(this.state.grBPP_PPB)
      console.log(this.state.grBV_VB)
      console.log(this.state.grBCo_CoB)
      console.log(this.state.grBS_SB)
      console.log(this.state.grPPCh_ChPP)
      console.log(this.state.grPPV_VPP)
      console.log(this.state.grPPCo_CoPP)
      console.log(this.state.grPPS_SPP)
      console.log(this.state.grChV_VCh)
      console.log(this.state.grChCo_CoCh)
      console.log(this.state.grChS_SCh)
      console.log(this.state.grVCo_CoV)
      console.log(this.state.grVS_SV)
      console.log(this.state.grCoS_SCo)
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
        this.state.res = (this.state.res/this.state.cptNbGroups).toFixed(1)
      }else{
        this.state.res = 0
      }
      console.log('res: fin'+this.state.res)
      console.log('cpt: '+this.state.cptNbGroups)
    };

    getBadgeColor = (scoreTot) => {
      if (scoreTot >= 4) {
        return 'green'
      }else if (scoreTot >= 3){
        return 'orange'
      }else{
        return 'red'
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
        <Text style={texts.launRepThank}>
          Merci d'avoir rempli le questionnaire.
        </Text>
        <Text style={texts.launRepClic}>
          Veuillez cliquer sur le bouton pour visualiser le rapport.
        </Text>
        <Button
          buttonStyle={buttons.launRep}
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
          title={'Rapport'}
        />
      </View>
    );
  }
}
