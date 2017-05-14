import { createStore, applyMiddleware } from 'redux'
import app from '../reducers/index'

import createSagaMiddleware from 'redux-saga'
import dataSaga from '../sagas/weather'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  let store = createStore(app, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}