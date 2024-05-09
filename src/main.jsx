import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Test from './Test.jsx'
import './App.css'
import {store} from './store/configureStore'
import {Provider} from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   
    <App/>
  </Provider>
)
