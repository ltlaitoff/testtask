import { CHANGE_IMAGE } from './actions'

const initialState = {
	image: ''
}

export const imageReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_IMAGE:
			return { ...state, image: action.payload }
	}
	return state
}
