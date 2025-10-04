
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  BrowserRouter } from 'react-router-dom'

hydrateRoot(document.getElementById('root'),
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
