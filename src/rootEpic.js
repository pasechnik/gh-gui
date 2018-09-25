import { combineEpics } from 'redux-observable'

// Import epics and combine
import github from './github/epics'

const rootEpic = combineEpics(
  github,
)

export default rootEpic
