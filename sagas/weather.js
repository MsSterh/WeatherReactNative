import { FETCHING_DATA, getDataSuceess, getDataFailure } from '../actions/weather'
import { put, call, takeEvery } from 'redux-saga/effects'
import getWeather from '../api/weather'

function* fetchData() {
  try {
    const weather = yield call(getWeather)
    yield put(getDataSuceess(weather))
  } catch(e) {
    yield put(getDataFailure())
  }
}

export default function* dataSaga() {
  yield takeEvery(FETCHING_DATA, fetchData)
}
