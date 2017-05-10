import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export default class Strong extends Component {
  render() {
    return (
      <Text style={styles.bold}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  }
});
