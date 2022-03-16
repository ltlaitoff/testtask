import { all } from 'redux-saga/effects'
import imageListSaga from './ImageList/saga'

export default function* rootSaga() {
	yield all([imageListSaga()])
}
