import {
	getImageList,
	setImageList,
	setImageListFailed
} from 'store/ImageList/actions'

describe('redux ImageList actions', () => {
	it('getImageList should return IMAGE_LIST_REQUESTED action', () => {
		expect(getImageList()).toEqual({
			type: 'IMAGE_LIST_REQUESTED'
		})
	})

	it('setImageList should return IMAGE_LIST_SUCCEEDED action', () => {
		const imageList = ['item1', 'item2']

		expect(setImageList(imageList)).toEqual({
			type: 'IMAGE_LIST_SUCCEEDED',
			payload: {
				imageList: imageList
			}
		})
	})

	it('setImageListFailed should return IMAGE_LIST_FAILED action', () => {
		expect(setImageListFailed('failedMessage')).toEqual({
			type: 'IMAGE_LIST_FAILED',
			payload: {
				failedMessage: 'failedMessage'
			}
		})
	})
})
