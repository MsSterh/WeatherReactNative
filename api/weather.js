const weather = [
  {
    forecast: {
      main: 'NY',
      description: 'cloudy',
      temp: '15'
    }
  },
  {
    forecast: {
      main: 'Tokio',
      description: 'sunny',
      temp: '20'
    }
  },
  {
    forecast: {
      main: 'Novosibirsk',
      description: 'snowy',
      temp: '-10'
    }
  }
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(weather)
    }, 3000)
  })
}

//function getWeather(zip) {
//  cont KEY_API = '68cb713dca337d1e9d552834e1ee55a0'
//
//  fetch('http://api.openweathermap.org/data/2.5/weather?zip={zip},us&appid={KEY_API}')
//    .then((response) => response.json())
//    .then((responseJSON) => {
//      console.log(responseJSON)
//      this.setState({
//        forecast: {
//          main: responseJSON.weather[0].main,
//          description: responseJSON.weather[0].description,
//          temp: responseJSON.main.temp
//        }
//      })
//    })
//    .catch((error) => {
//      console.warn(error)
//    })
//}
