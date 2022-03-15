/**
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react'
import type { Node } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
	RefreshControl,
	View,
	ScrollView,
	Image,
	Text,
	FlatList,
	SafeAreaView
} from 'react-native'

import Item from 'components/Item'

import { getPhotos } from 'api'

import styles from './ImageList.styles.js'

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
					renderItem={props => <Item {...props} />}
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
