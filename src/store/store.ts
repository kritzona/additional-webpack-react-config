import { createStore, combineReducers } from 'redux'
import appReducer from './app/reducer'

const rootReducer = combineReducers({
  app: appReducer,
})
const store = createStore(rootReducer)

export default store
export type RootState = ReturnType<typeof rootReducer>
