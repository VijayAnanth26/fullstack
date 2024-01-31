import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import 'rsuite/dist/rsuite.min.css';
import App from './App.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
