import { combineReducers } from 'redux'

import { imageReducer } from './Image/reducers'

export default combineReducers({
	image: imageReducer
})
