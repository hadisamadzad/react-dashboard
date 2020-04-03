import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addAsset } from './actions/assets'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

//store.dispatch(addAsset({ description: 'Water Bill', amount: 1200, createdAt: 1391 }))
//store.dispatch(addAsset({ description: 'Gas Bill', amount: 2300, createdAt: 1392 }))
//store.dispatch(addAsset({ description: 'Power Bill', amount: 1500, createdAt: 1388 }))
//store.dispatch(addAsset({ description: 'Rent', amount: 109500, createdAt: 1377 }))
//store.dispatch(setTextFilter('water'));
//setTimeout(() => {
//    store.dispatch(setTextFilter('bill'));
//}, 3000);

//const state = store.getState()
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));