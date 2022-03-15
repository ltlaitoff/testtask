/**
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react'
import type { Node } from 'react'
import FullScreenImage from 'components/FullScreenImage'

import { SafeAreaView, Image } from 'react-native'

const ImageDetails = () => {
	return (
		<SafeAreaView>
			<FullScreenImage />
		</SafeAreaView>
	)
}

export default ImageDetails
