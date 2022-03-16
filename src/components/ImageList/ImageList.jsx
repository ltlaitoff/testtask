/**
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react'
import type { Node } from 'react'
import { useNavigation } from '@react-navigation/native'

import { useDispatch, useSelector } from 'react-redux'
import { getImageList } from 'store/actions'

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
import { STATUSES } from 'data/config'

import styles from './ImageList.styles.js'

const ImageList = (): Node => {
	const [refreshing, setRefreshing] = useState(false)

	const dispatch = useDispatch()
	const { imageList, status } = useSelector(store => store.imageList)

	const getImageListFromAPI = () => {
		setRefreshing(true)
		dispatch(getImageList())
	}

	const refreshControlSettings = {
		refreshing: refreshing,
		onRefresh: getImageListFromAPI,
		size: 'large',
		colors: ['#611eb1', '#c83db7']
	}

	useEffect(() => {
		if (refreshing) {
			setRefreshing(false)
		}
	}, [imageList, status])

	useEffect(() => {
		getImageListFromAPI()
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			{status === STATUSES.failed ? (
				<ScrollView
					refreshControl={<RefreshControl {...refreshControlSettings} />}
				>
					<Text style={styles.error}>Что-то пошло не так</Text>
				</ScrollView>
			) : (
				<FlatList
					style={styles.list}
					data={imageList}
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
