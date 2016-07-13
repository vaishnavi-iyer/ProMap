console.log('Hello World!- In Index.js')
import React from 'react'
import { render } from 'react-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

import reducer from './reducer'
import App from './components/app.jsx'

const logger = createLogger()
// const store = createStore(
//   combineReducers({
//     reducer,
//     routing: routerReducer
//   }),
//   applyMiddleware(logger, thunk)
// )
const store = createStore(reducer, applyMiddleware(logger, thunk))
// const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
