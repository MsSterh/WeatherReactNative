import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';

import Forecast from './Forecast.js';

export default class WeatherProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zip: '',
      forecast: null
    };
  }

  _handleTextChange(event) {
    var zip = event.nativeEvent.text
    this.setState({zip: zip})

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&units=imperial')
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON)
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.weather[0].temp
          }
        })
      })
      .catch((error) => {
        console.warn(error)
      })
  }

  render() {
    var content = null
    if (this.state.forecast !== null) {
      content = <Forecast style={styles.forecast}
                          main={this.state.forecast.main}
                          description={this.state.forecast.description}
                          temp={this.state.forecast.temp}/>
    }

    return (
      <View style={styles.container}>
        <Image source={require('./images/flowers.jpg')}
               resizeMode='cover'
               style={styles.backdrop}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current weather for
              </Text>
              <View style={styles.zipContainer}>
                <TextInput style={[styles.zipCode, styles.mainText]}
                           placeholder="Enter zip"
                           returnKeyType="go"
                           onChangeText={(zip) => this.setState({zip})}
                           onSubmitEditing={(event) => this._handleTextChange(event)}
                           value={this.state.zip}/>
                </View>
              </View>
            {content}
          </View>
        </Image>
      </View>
    );
  }
}

const baseFontSize = 16

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 50,
    height: baseFontSize,
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#ffffff'
  }
});

AppRegistry.registerComponent('WeatherProject', () => WeatherProject);
