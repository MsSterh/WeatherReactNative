export const FETCHING_DATA         = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_FEILURE = 'FETCHING_DATA_FEILURE'

export function getDataSuccess(weather) {
  return {
    type: FETCHING_DATA_SUCCESS,
    weather
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FEILURE
  }
}

export function fetchData() {
  return {
    type: FETCHING_DATA
  }
}
