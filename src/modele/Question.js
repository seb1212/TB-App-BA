import React, { Component } from 'react';

export default class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      contenu: "",
      concept: "",
      projet: "",
      ponderation: "",
      infoProjet: "",
    };

  //  setInfoProjet (number) {this.setState({infoProjet: number})}
  }
}
