import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
	IMAGE_LIST_REQUESTED,
	setImageList,
	setImageListFailed
} from './actions'
import { getPhotos } from 'api'

export function* workerImageList() {
	try {
		const imageList = yield call(getPhotos)
		yield put(setImageList(imageList))
	} catch (e) {
		yield put(setImageListFailed(e?.message))
	}
}

function* imageListSaga() {
	yield takeEvery(IMAGE_LIST_REQUESTED, workerImageList)
}

export default imageListSaga
