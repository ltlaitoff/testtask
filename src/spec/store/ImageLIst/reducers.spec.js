import { imageListReducer } from 'store/ImageList/reducers'

describe('redux imageList reducers', () => {
	const initialState = {
		status: 'initial',
		imageList: []
	}

	it('should provide the initial state', () => {
		expect(imageListReducer(undefined, {})).toEqual(initialState)
	})

	it('should provide IMAGE_LIST_REQUESTED action', () => {
		const action = {
			type: 'IMAGE_LIST_REQUESTED'
		}

		expect(imageListReducer(undefined, action)).toEqual(initialState)
	})

	it('should provide IMAGE_LIST_SUCCEEDED action', () => {
		const action = {
			type: 'IMAGE_LIST_SUCCEEDED',
			payload: {
				imageList: ['test']
			}
		}

		expect(imageListReducer(undefined, action)).toEqual({
			status: 'done',
			imageList: ['test']
		})
	})

	it('should provide IMAGE_LIST_FAILED action', () => {
		const initital = {
			status: 'done',
			imageList: ['item1', 'item2']
		}

		const action = {
			type: 'IMAGE_LIST_FAILED',
			payload: {
				failedMessage: 'failedMessage'
			}
		}

		expect(imageListReducer(undefined, action)).toEqual({
			status: 'failed',
			imageList: [],
			failedMessage: 'failedMessage'
		})
	})
})
