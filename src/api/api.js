import { API_TOKEN } from '@env'

const getPhotos = () => {
	if (API_TOKEN === undefined) {
		throw new Error('API: API_TOKEN not defined')
	}

	return fetch(`https://api.unsplash.com/photos/?client_id=${API_TOKEN}`)
		.then(response => response.json())
		.catch(err => err)
}

export { getPhotos }
