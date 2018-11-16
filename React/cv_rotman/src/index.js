import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from 'redux/store'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import USA from './Apperance/img/ukFlag.svg'
import RUS from './Apperance/img/norwayFlag.svg'


ReactDOM.render((
    <Provider store={store}> <BrowserRouter>
        <App flagUsa={USA} flagRus={RUS}/>
    </BrowserRouter>
    </Provider>
), document.getElementById('root'))