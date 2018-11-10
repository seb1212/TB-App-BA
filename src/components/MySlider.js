import React, { Component } from 'react';
import { Slider } from 'react-native-elements';

export default class MySlider extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Slider
        style={{
          marginTop: 25,
          marginBottom: 20,
          marginLeft: 30,
          marginRight: 30,
        }}
        minimumValue={1}
        maximumValue={5}
        step={1}
        animateTransitions={true}
        thumbStyle={{
          backgroundColor: '#708090',
          position: 'absolute',
          width: 25,
          height: 50,
          borderRadius: 25,
          top: 22,
        }}
        minimumTrackTintColor={'#32CD32'}
        value={this.props.value}
        onValueChange={this.props.onValueChange}
      />
    );
  }
}
