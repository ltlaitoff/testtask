/**
 * @format
 * @flow strict-local
 */
import React from 'react'
import type { Node } from 'react'

import PropTypes from 'prop-types'

import { View, Image, Text } from 'react-native'

import styles from './ImageListFooter.styles.js'
import Heart from 'assets/images/favicons/Heart'

const ImageListFooter = ({ userLogoUrl, userName, likesCount, liked }) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.left}>
				<Image
					style={styles.userIcon}
					source={{
						uri: userLogoUrl
					}}
				/>
				<Text style={styles.username}>{userName}</Text>
			</View>

			<View style={styles.right}>
				{/* style={{ backgroundColor: liked ? 'gray' : 'orange' }} */}
				<Heart />
				<Text style={styles.likeText}>{likesCount}</Text>
			</View>
		</View>
	)
}

// ImageListFooter.propTypes = {
// 	userLogoUrl: PropTypes.string,
// 	userName: PropTypes.string,
// 	likesCount: PropTypes.number,
// 	liked: PropTypes.boolean
// }

export default ImageListFooter
