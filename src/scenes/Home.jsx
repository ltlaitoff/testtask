/**
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react'
// import type { Node } from 'react'

import ImageList from 'components/ImageList'

import { SafeAreaView } from 'react-native'

const Home = () => {
	return (
		<SafeAreaView>
			<ImageList />
		</SafeAreaView>
	)
}

export default Home
