export const CHANGE_IMAGE = 'CHANGE_IMAGE'

export const setImage = imageUrl => ({
	type: CHANGE_IMAGE,
	payload: imageUrl
})
