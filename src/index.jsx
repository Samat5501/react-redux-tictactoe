import { render } from 'react-dom'
import React from 'react'
import './style.css'
import { App } from './components/App'
import { Provider } from 'react-redux'
import { store } from './reducers'

// import './index.less'

render(
    <Provider store={store}>
      <App />  
    </Provider>,
    document.getElementById("root")
)