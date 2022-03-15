/**
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react'
import type { Node } from 'react'
import Navigations from 'navigations'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'store/reducers'

const store = createStore(rootReducer)

const App: () => Node = () => {
	return (
		<Provider store={store}>
			<Navigations />
		</Provider>
	)
}

export default App
