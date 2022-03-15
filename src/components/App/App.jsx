/**
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'
import type { Node } from 'react'

import ImageList from 'components/ImageList'

import { getPhotos } from 'api'

import { SafeAreaView } from 'react-native'

import styles from './App.styles.js'

const App: () => Node = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ImageList />
		</SafeAreaView>
	)
}

export default App
