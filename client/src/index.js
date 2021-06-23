import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promisMiddlware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import './index.css'
import 'antd/dist/antd.css'
import Reducer from './_reducers'

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
