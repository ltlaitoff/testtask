/**
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react'
import type { Node } from 'react'

import {
	RefreshControl,
	View,
	ScrollView,
	Image,
	Text,
	FlatList,
	SafeAreaView
} from 'react-native'

import ImageListFooter from './components/ImageListFooter'

import { getPhotos } from 'api'

import styles from './ImageList.styles.js'

const renderItem = ({ item }) => {
	return (
		<View style={styles.item}>
			<Image
				style={styles.image}
				source={{
					uri: item.urls.regular
				}}
			/>

			<ImageListFooter
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

const ImageList = (): Node => {
	const [error, setError] = useState(false)
	const [images, setImages] = useState([])
	const [refreshing, setRefreshing] = useState(false)

	const getImagesFromAPI = () => {
		setRefreshing(true)
		setError(false)

		getPhotos()
			.then(photos => {
				setImages(photos)
				setRefreshing(false)
			})
			.catch(() => {
				setError(true)
				setRefreshing(false)
			})
	}

	const refreshControlSettings = {
		refreshing: refreshing,
		onRefresh: getImagesFromAPI,
		size: 'large',
		colors: ['#611eb1', '#c83db7']
	}

	useEffect(() => {
		getImagesFromAPI()
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			{error ? (
				<ScrollView
					refreshControl={<RefreshControl {...refreshControlSettings} />}
				>
					<Text style={styles.error}>Что-то пошло не так</Text>
				</ScrollView>
			) : (
				<FlatList
					style={styles.list}
					data={images}
					renderItem={renderItem}
					keyExtractor={item => item.id}
					showsVerticalScrollIndicator={false}
					refreshControl={<RefreshControl {...refreshControlSettings} />}
					ListFooterComponentStyle={styles.listFooter}
					ListFooterComponent={<View />}
				/>
			)}
		</SafeAreaView>
	)
}

export default ImageList
