import { FETCHING_DATA, getDataSuccess, getDataFailure } from '../actions/weather'
import { put, call, takeEvery, select } from 'redux-saga/effects'
import getForecast from '../api/weather'

const zipFromState = state => state.weather.weather.zip

function* fetchData() {
  const zip = yield select(zipFromState)
  try {
    const forecast = yield call(getForecast, zip)
    yield put(getDataSuccess(forecast))
  } catch(e) {
    yield put(getDataFailure())
  }
}

export default function* dataSaga() {
  yield takeEvery(FETCHING_DATA, fetchData)
}
