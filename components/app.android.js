import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight } from 'react-native';

import { connect }    from 'react-redux'
import { fetchData }  from '../actions/weather'

import Forecast from '../components/forecast.js'

const mapStateToProps = state => ({
  weather: {
    zip: state.weather.zip,
    forecast: state.weather.forecast
  }
})

const mapDispatchToProps = dispatch => ({
    fetchData: () =>  dispatch(fetchData())
})

const App = (props) => {
  var content = null
  if (this.state.forecast !== null) {
    content = <Forecast style={styles.forecast}
                        main={this.state.forecast.main}
                        description={this.state.forecast.description}
                        temp={this.state.forecast.temp} />
  }

  return (
    <Image source={require('../images/flowers.jpg')}
           style={styles.backdrop}>
      <View style={styles.overlay}>
        <View style={styles.row}>
          <Text style={styles.mainText}>
            Current weather for
          </Text>
          <View style={styles.zipContainer}>
            <TextInput style={[styles.zipCode, styles.mainText]}
                       placeholder="zip..."
                       returnKeyType="go"
                       onChangeText={(zip) => this.setState({zip})}
                       onSubmitEditing={(event) => this._handleTextChange(event)}
                       value={this.state.zip}/>
          </View>
        </View>
        {content}
      </View>
      <TouchableHighlight onPress={(e) => this._onPress(e)}
                          style={styles.touchable}>
        <Text></Text>
      </TouchableHighlight>
    </Image>
  );
}

const baseFontSize = 16

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: null,
    flex: 1,
    width: null
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 20
  },
  row: {
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    padding: 30
  },
  zipContainer: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginTop: 2,
    width: 50
  },
  zipCode: {
    height: baseFontSize,
    width: 50
  },
  mainText: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ffffff',
    fontSize: baseFontSize
  },
  touchable: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    flex: 1
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
