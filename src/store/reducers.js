import { combineReducers } from 'redux'

import { imageReducer } from './Image/reducers'
import { imageListReducer } from './ImageList/reducers'

export default combineReducers({
	image: imageReducer,
	imageList: imageListReducer
})
