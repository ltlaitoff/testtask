import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ItemFooter from './components/ItemFooter'

import styles from './Item.styles.js'

const Item = ({ item }) => {
	const navigation = useNavigation()

	return (
		<View style={styles.item}>
			<TouchableOpacity
				style={styles.image}
				onPress={() => navigation.navigate('ImageDetails')}
			>
				<Image
					style={styles.image}
					source={{
						uri: item.urls.regular
					}}
				/>
			</TouchableOpacity>

			<ItemFooter
				style={styles.footer}
				userUrl={item.user.links.html}
				userLogoUrl={item.user.profile_image.small}
				userName={item.user.username}
				likesCount={item.likes}
				liked={item.liked_by_user}
			/>
		</View>
	)
}

export default Item
