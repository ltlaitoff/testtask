/**
 * @format
 * @flow strict-local
 */
import React from 'react'
import type { Node } from 'react'

import PropTypes from 'prop-types'

import {
	View,
	Image,
	Text,
	Linking,
	TouchableOpacity,
	Alert
} from 'react-native'

import styles from './ItemFooter.styles.js'
import Heart from 'assets/images/favicons/Heart'

const ItemFooter = ({ userUrl, userLogoUrl, userName, likesCount, liked }) => {
	const onPress = () => {
		const supported = Linking.canOpenURL(userUrl)

		if (supported) {
			Linking.openURL(userUrl)
		} else {
			Alert.alert(`Don't know how to open this URL: ${userUrl}`)
		}
	}

	return (
		<View style={styles.wrapper}>
			<TouchableOpacity style={styles.left} onPress={onPress}>
				<View style={styles.userIconView}>
					<Image
						style={styles.userIcon}
						source={{
							uri: userLogoUrl
						}}
					/>
				</View>
				<Text style={styles.username}>{userName}</Text>
			</TouchableOpacity>

			<View style={styles.right}>
				<Heart style={styles.likeIcon} fill={liked ? '#c83db7' : '#6c6f78'} />
				<Text style={styles.likeText}>{likesCount}</Text>
			</View>
		</View>
	)
}

ItemFooter.propTypes = {
	userUrl: PropTypes.string,
	userLogoUrl: PropTypes.string,
	userName: PropTypes.string,
	likesCount: PropTypes.number,
	liked: PropTypes.bool
}

export default ItemFooter
