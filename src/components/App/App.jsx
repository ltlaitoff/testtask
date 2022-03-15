/**
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'
import type { Node } from 'react'

import ImageList from 'components/ImageList'

import { getPhotos } from 'api'

import { View } from 'react-native'

import styles from './App.styles.js'

const App: () => Node = () => {
	return (
		<View style={styles.container}>
			<ImageList />
		</View>
	)
}

export default App
