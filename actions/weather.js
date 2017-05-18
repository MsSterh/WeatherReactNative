export const FETCHING_DATA         = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_FEILURE = 'FETCHING_DATA_FEILURE'
export const UPDATE_ZIP            = 'UPDATE_ZIP'

export function getDataSuccess(forecast) {
  return {
    type: FETCHING_DATA_SUCCESS,
    forecast
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

export function updateZip(text) {
  return {
    type: UPDATE_ZIP,
    text
  }
}
