import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promisMiddlware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Reducer from './_reducers'
import App from './App'

const createStoreWithMiddleware = applyMiddleware(promisMiddlware, ReduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )}>
      <App />
    </Provider>,
  document.getElementById('root')
);

