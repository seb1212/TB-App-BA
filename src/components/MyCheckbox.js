import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';

export default class MyCheckbox extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <CheckBox
        containerStyle={{
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        }}
        textStyle={{
          color: '#000000',
          textDecorationStyle: 'dotted',
        }}
        center
        title={this.props.title}
        checked={this.props.checked}
        onPress={this.props.onPress}
    />
    );
  }
}
