import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';

import Forecast from './components/forecast.js';

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

    fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=68cb713dca337d1e9d552834e1ee55a0')
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON)
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
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
      <Image source={require('./images/flowers.jpg')}
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
      </Image>
    );
  }
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
  }
});

AppRegistry.registerComponent('WeatherProject', () => WeatherProject);
