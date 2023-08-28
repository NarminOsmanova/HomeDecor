import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './assets/style/sweetalert.css'
import './assets/style/general.css'
import './assets/style/style.css'
import { Provider } from 'react-redux'
import { store } from './features/store.js';
import 'animate.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>,
)
