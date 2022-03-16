/**
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react'
import type { Node } from 'react'
import { useSelector } from 'react-redux'

import {
	SafeAreaView,
	ScrollView,
	Image,
	ActivityIndicator
} from 'react-native'

import styles from './FullScreenImage.styles.js'

const FullScreenImage = () => {
	const [loaded, setLoaded] = useState(false)
	const [horizontal, setHorisontal] = useState(true)

	const imageUrl = useSelector(state => state.image.image)

	Image.getSize(imageUrl, (weight, height) => {
		setHorisontal(weight > height)
	})

	return (
		<SafeAreaView style={styles.container}>
			{loaded === false && <ActivityIndicator size='large' color='#611eb1' />}
			<Image
				style={[
					styles.image,
					{ transform: [{ rotate: horizontal ? '90deg' : '0deg' }] }
				]}
				source={{
					uri: imageUrl
				}}
			/>
		</SafeAreaView>
	)
}

export default FullScreenImage
