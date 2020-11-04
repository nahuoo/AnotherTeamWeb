import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {AngleContextProvider} from './components/Contexts/AngleContext'

ReactDOM.render(
  <React.StrictMode>
    <AngleContextProvider>
      <App />
    </AngleContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
