import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import reportWebVitals from './reportWebVitals'
import App from './App'
import './shared/service/fontwesome'
import 'react-toastify/dist/ReactToastify.css'
import 'sweetalert2/dist/sweetalert2.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
