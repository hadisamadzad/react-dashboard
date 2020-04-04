import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import _ from 'lodash'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addAsset } from './actions/assets'
import { addUser } from './actions/users'
import 'normalize.css/normalize.css'
import './styles/styles.scss'


const store = configureStore()
const logState = _.debounce(() => {
    console.log(store.getState())
}, 10)

store.subscribe(() => {
    //logState()
})

store.dispatch(addUser({
    firstName: 'امین',
    lastName: 'رامینی',
    mobile: '9128286571',
    email: 'a.ramini@gmail.com',
    password: '123456'
}))

store.dispatch(addUser({
    firstName: 'نسرین',
    lastName: 'جعفری',
    mobile: '9178189360',
    email: 'n.jafari@gmail.com',
    password: '123456'
}))

//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById("app"));