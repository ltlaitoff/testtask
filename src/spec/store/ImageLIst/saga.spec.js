import { runSaga } from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import imageListSaga, { workerImageList } from 'store/ImageList/saga'

import * as api from 'api/api'

describe('redux imageList saga', () => {
	let mockGetData

	beforeEach(() => {
		mockGetData = jest.spyOn(api, 'getPhotos')
	})

	afterEach(() => {
		mockGetData.mockClear()
	})

	it('should wait for every IMAGE_LIST_REQUESTED action and call workerImageList', () => {
		const genObject = imageListSaga()

		expect(genObject.next().value).toEqual(
			takeEvery('IMAGE_LIST_REQUESTED', workerImageList)
		)
	})

	it('workerImageList should call api.getPhotos and dispatch succeeded action', async () => {
		mockGetData.mockImplementation(() => Promise.resolve([]))
		const dispatched = []

		const result = await runSaga(
			{
				dispatch: action => dispatched.push(action)
			},
			workerImageList
		)

		expect(mockGetData).toHaveBeenCalledTimes(1)
		expect(dispatched).toEqual([
			{
				type: 'IMAGE_LIST_SUCCEEDED',
				payload: {
					imageList: []
				}
			}
		])
	})

	it('workerImageList should call api.getPhotos and dispatch failed action', async () => {
		mockGetData.mockImplementation(() =>
			Promise.reject({ message: 'testError' })
		)

		const dispatched = []

		const result = await runSaga(
			{
				dispatch: action => dispatched.push(action)
			},
			workerImageList
		)

		expect(mockGetData).toHaveBeenCalledTimes(1)
		expect(dispatched).toEqual([
			{
				type: 'IMAGE_LIST_FAILED',
				payload: {
					failedMessage: 'testError'
				}
			}
		])
	})
})
