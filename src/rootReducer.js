import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// import your Module reducers here and combine them
import github from './github/reducers'

const rootReducer = combineReducers({
  router: routerReducer,
  github,
})

export default rootReducer
