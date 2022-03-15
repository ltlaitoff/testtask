/**
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react'
import type { Node } from 'react'
import { useSelector } from 'react-redux'

import { SafeAreaView, ScrollView, Image } from 'react-native'

import styles from './FullScreenImage.styles.js'

const FullScreenImage = () => {
	const [horizontal, setHorisontal] = useState(true)

	const imageUrl = useSelector(state => state.image.image)

	Image.getSize(imageUrl, (weight, height) => {
		setHorisontal(weight > height)
	})

	return (
		<SafeAreaView
			style={
				({ ...styles.container },
				{ transform: [{ rotate: horizontal ? '90deg' : '0deg' }] })
			}
		>
			{/* <ScrollView style={styles.scroll}> */}
			<Image
				style={styles.image}
				source={{
					uri: imageUrl
				}}
			/>
			{/* </ScrollView> */}
		</SafeAreaView>
	)
}

export default FullScreenImage
