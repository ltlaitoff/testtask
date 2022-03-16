import { imageReducer } from 'store/Image/reducers'

describe('redux Image reducers', () => {
	const initialState = {
		image: ''
	}

	it('should provide the initial state', () => {
		expect(imageReducer(undefined, {})).toEqual(initialState)
	})

	it('should provide CHANGE_IMAGE action', () => {
		const action = {
			type: 'CHANGE_IMAGE',
			payload: 'imageUrl'
		}

		expect(imageReducer({}, action)).toEqual({
			image: 'imageUrl'
		})
	})
})
