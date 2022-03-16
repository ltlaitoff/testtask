import { IMAGE_LIST_SUCCEEDED, IMAGE_LIST_FAILED } from './actions'
import { STATUSES } from 'data/config'

const defaultState = {
	status: STATUSES.initial,
	imageList: []
}

export const imageListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case IMAGE_LIST_SUCCEEDED:
			return {
				...state,
				imageList: action.payload.imageList,
				status: STATUSES.done
			}
		case IMAGE_LIST_FAILED:
			return {
				...state,
				imageList: [],
				status: STATUSES.failed,
				failedMessage: action.payload.failedMessage
			}
	}

	return state
}
