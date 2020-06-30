import { createStore, combineReducers } from 'redux'
import settingsReducer from '../Reducers/settingsReducer'

const rootReducer = combineReducers({ settings: settingsReducer })

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore