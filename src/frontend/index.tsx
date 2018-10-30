import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const app = <App header="Electron Starter Kit" />
const container = document.createElement('div')
document.body.appendChild(container)

ReactDOM.render(app, container)
