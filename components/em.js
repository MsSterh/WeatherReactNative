import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export default class Em extends Component {
  render() {
    return (
      <Text style={styles.italic}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  italic: {
    fontStyle: 'italic'
  }
});
