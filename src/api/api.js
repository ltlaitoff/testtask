import { API_TOKEN } from '@env'

import { shuffle } from 'utils'

const getPhotos = () => {
	if (API_TOKEN === undefined) {
		throw new Error('API: API_TOKEN not defined')
	}

	return fetch(`https://api.unsplash.com/photos/?client_id=${API_TOKEN}`)
		.then(response => response.json())
		.then(array => shuffle(array))
		.catch(err => {
			throw err
		})
}

export { getPhotos }
