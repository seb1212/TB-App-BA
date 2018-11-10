import React, { Component } from 'react';
import { Badge } from 'react-native-elements';

export default class MyBadge extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
        <Badge
          containerStyle={{
            backgroundColor: this.props.badgeColor,
            height: 30,
            width: 30
          }}
        />
    );
  }
}
