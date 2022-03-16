/**
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react'
import type { Node } from 'react'
import Navigations from 'navigations'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'store/reducers'
import rootSaga from 'store/sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const App: () => Node = () => {
	return (
		<Provider store={store}>
			<Navigations />
		</Provider>
	)
}

export default App
