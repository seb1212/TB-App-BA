import React, { Component } from 'react';

export default class Response extends Component {
  constructor(questId,score) {
    super();
    this.state = {
      idQuest: questId,
      score: score,
    };
  }
}
