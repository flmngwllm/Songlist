import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import reducers from './reducers'


//wrapping app in provider and creating the redux store
ReactDOM.render (
<Provider store={createStore(reducers)}>
<App/>
</Provider>,
    document.querySelector('#root'))