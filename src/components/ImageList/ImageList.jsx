/**
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react'
import type { Node } from 'react'

import { View, Image, Text, FlatList, SafeAreaView } from 'react-native'

import ImageListFooter from './components/ImageListFooter'

import { getPhotos } from 'api'

import styles from './ImageList.styles.js'

const testData = [
	{
		id: 'HSiT_DuKE2c',
		created_at: '2021-12-27T11:29:32-05:00',
		updated_at: '2022-03-14T01:27:40-04:00',
		promoted_at: null,
		width: 8192,
		height: 5464,
		color: '#c0c0c0',
		blur_hash: 'LKHCG,NG%MD%kCD%tRxt%N_N%gaJ',
		description: null,
		alt_description: null,
		urls: {
			raw: 'https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?ixid=MnwzNDQ1M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjQ3Mjg2OTIy\u0026ixlib=rb-1.2.1',
			full: 'https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwzNDQ1M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjQ3Mjg2OTIy\u0026ixlib=rb-1.2.1\u0026q=85',
			regular:
				'https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDQ1M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjQ3Mjg2OTIy\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
			small:
				'https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDQ1M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjQ3Mjg2OTIy\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400',
			thumb:
				'https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDQ1M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjQ3Mjg2OTIy\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200',
			small_s3:
				'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1640622303392-7d2bee0c2438'
		},
		links: {
			self: 'https://api.unsplash.com/photos/HSiT_DuKE2c',
			html: 'https://unsplash.com/photos/HSiT_DuKE2c',
			download:
				'https://unsplash.com/photos/HSiT_DuKE2c/download?ixid=MnwzNDQ1M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjQ3Mjg2OTIy',
			download_location:
				'https://api.unsplash.com/photos/HSiT_DuKE2c/download?ixid=MnwzNDQ1M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjQ3Mjg2OTIy'
		},
		categories: [],
		likes: 66,
		liked_by_user: false,
		current_user_collections: [],
		sponsorship: {
			impression_urls: [
				'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false\u0026bannerID=9710725\u0026rnd=[timestamp]\u0026redir=https://secure.insightexpressai.com/adserver/1pixel.gif'
			],
			tagline: 'Original by design',
			tagline_url:
				'https://www.microsoft.com/surface?ocid=UnsplashFY22_soc_pmc_sur_',
			sponsor: {
				id: 'N-JSeSTCz68',
				updated_at: '2022-03-14T15:41:04-04:00',
				username: 'surface',
				name: 'Surface',
				first_name: 'Surface',
				last_name: null,
				twitter_username: 'surface',
				portfolio_url: 'http://surface.com',
				bio: 'Follow us @Surface. #OriginalByDesign',
				location: null,
				links: {
					self: 'https://api.unsplash.com/users/surface',
					html: 'https://unsplash.com/@surface',
					photos: 'https://api.unsplash.com/users/surface/photos',
					likes: 'https://api.unsplash.com/users/surface/likes',
					portfolio: 'https://api.unsplash.com/users/surface/portfolio',
					following: 'https://api.unsplash.com/users/surface/following',
					followers: 'https://api.unsplash.com/users/surface/followers'
				},
				profile_image: {
					small:
						'https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32',
					medium:
						'https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64',
					large:
						'https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128'
				},
				instagram_username: 'surface',
				total_collections: 6,
				total_likes: 0,
				total_photos: 210,
				accepted_tos: true,
				for_hire: false,
				social: {
					instagram_username: 'surface',
					portfolio_url: 'http://surface.com',
					twitter_username: 'surface',
					paypal_email: null
				}
			}
		},
		topic_submissions: {},
		user: {
			id: 'N-JSeSTCz68',
			updated_at: '2022-03-14T15:41:04-04:00',
			username: 'surface',
			name: 'Surface',
			first_name: 'Surface',
			last_name: null,
			twitter_username: 'surface',
			portfolio_url: 'http://surface.com',
			bio: 'Follow us @Surface. #OriginalByDesign',
			location: null,
			links: {
				self: 'https://api.unsplash.com/users/surface',
				html: 'https://unsplash.com/@surface',
				photos: 'https://api.unsplash.com/users/surface/photos',
				likes: 'https://api.unsplash.com/users/surface/likes',
				portfolio: 'https://api.unsplash.com/users/surface/portfolio',
				following: 'https://api.unsplash.com/users/surface/following',
				followers: 'https://api.unsplash.com/users/surface/followers'
			},
			profile_image: {
				small:
					'https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32',
				medium:
					'https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64',
				large:
					'https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128'
			},
			instagram_username: 'surface',
			total_collections: 6,
			total_likes: 0,
			total_photos: 210,
			accepted_tos: true,
			for_hire: false,
			social: {
				instagram_username: 'surface',
				portfolio_url: 'http://surface.com',
				twitter_username: 'surface',
				paypal_email: null
			}
		}
	}
]

/*
  Todo: 
  Обёртка с рамкой по цвету с АПИ
  Внутри картинка
  Под кратинкой футтер, который будет иметь в себе лого человека, название человека и справа иконку лайка, которая будет подсвеченна или нет в зависимости от апи
*/

const ImageList = (): Node => {
	const [error, setError] = useState(false)
	const [images, setImages] = useState(testData)

	// useEffect(() => {
	// 	console.log('useEffect')
	// 	getPhotos().then(photos => setImages(photos))
	// }, [])

	{
		/* {images.length === 0 && <Text>API загружается</Text>} */
	}

	const renderItem = ({ item }) => {
		console.log(item.user.profile_image.small)

		return (
			<View style={styles.item}>
				<Image
					style={styles.image}
					source={{
						uri: item.urls.full
					}}
				/>

				<ImageListFooter
					style={styles.footer}
					userLogoUrl={item.user.profile_image.small}
					userName={item.user.username}
					likesCount={item.likes}
					liked={item.liked_by_user}
				/>
			</View>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={styles.list}
				data={images}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
	)
}

export default ImageList
