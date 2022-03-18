/**
 * @format
 * @flow strict-local
 */
import React from 'react'
import type { Node } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setImage } from 'store/actions'
import ItemFooter from './components/ItemFooter'

import styles from './Item.styles.js'

const Item: () => Node = ({ item }) => {
	const navigation = useNavigation()
	const dispatch = useDispatch()

	const {
		urls: { regular: mainImageUrl, full: mainFullImageUrl },
		user: {
			links: { html: userUrl },
			profile_image: { small: userLogoUrl },
			username: userName
		},
		likes: likesCount,
		liked_by_user: liked
	} = item

	const onImageClick = () => {
		navigation.navigate('ImageDetails')
		dispatch(setImage(mainFullImageUrl))
	}

	return (
		<View style={styles.item}>
			<TouchableOpacity
				style={styles.image}
				onPress={onImageClick}
				accessibilityRole={'imagebutton'}
			>
				<Image
					accessibilityRole={'image'}
					style={styles.image}
					source={{
						uri: mainImageUrl
					}}
				/>
			</TouchableOpacity>
			<ItemFooter
				style={styles.footer}
				userUrl={userUrl}
				userLogoUrl={userLogoUrl}
				userName={userName}
				likesCount={likesCount}
				liked={liked}
			/>
		</View>
	)
}

export default Item
