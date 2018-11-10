import React, { Component } from 'react';
import { Button } from 'react-native-elements';

export default class ActionButton extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Button
        containerViewStyle={{
          backgroundColor: 'transparent',
          alignItems: 'center',
        }}
        large
        raised
        rounded
        color='white'
        fontWeight='bold'
        buttonStyle={this.props.buttonStyle}
        disabled={this.props.disabled}
        onPress={this.props.onPress}
        title={this.props.title}
      />
    );
  }
}
