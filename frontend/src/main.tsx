import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import { App } from './components/App/App'
import './styles/index.scss'
import {store} from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>,
)
