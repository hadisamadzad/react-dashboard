import { createStore, combineReducers } from 'redux'
import assetsReducer from '../reducers/assets'

export default () => {
    const store = createStore(combineReducers({
        assets: assetsReducer,
    }));

    return store;
}