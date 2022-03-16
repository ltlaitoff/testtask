import { setImage } from 'store/Image/actions'

describe('redux Image actions', () => {
	it('setImage should return CHANGE_IMAGE action', () => {
		expect(setImage('imageUrl')).toEqual({
			type: 'CHANGE_IMAGE',
			payload: 'imageUrl'
		})
	})
})
