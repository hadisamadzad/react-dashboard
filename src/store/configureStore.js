import { createStore, combineReducers } from 'redux'
import assetsReducer from '../reducers/assets'
import usersReducer from '../reducers/users'

export default () => {
    const store = createStore(combineReducers({
        assets: assetsReducer,
        users: usersReducer
    }));

    return store;
}