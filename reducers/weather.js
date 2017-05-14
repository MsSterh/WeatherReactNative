import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FEILURE } from '../actions/weather'

const initialState = {
  status: {
    isFetching: false,
    isFetched: false,
    error: false
  },
  weather: {
    zip: '',
    forecast: null
  }
}

export default function weather (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        status: { isFetching: true },
        weather: {
          zip: '',
          forecast: null
        }
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        weather: action.weather,
        status: {
          isFetching: false,
          isFetched: true
        }
      }
    case FETCHING_DATA_FEILURE:
      return {
        ...state,
        status: {
          isFetching: false,
          error: true
        }
      }
    default:
      return state
  }
}
