import { CHANGE_IMAGE } from './actions'

const defaultState = {
	image: ''
}

export const imageReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_IMAGE:
			return { ...state, image: action.payload }
	}
	return state
}
