export const IMAGE_LIST_REQUESTED = 'SET_IMAGE_REQUESTED'
export const IMAGE_LIST_SUCCEEDED = 'SET_IMAGE_LIST_SUCCESS'
export const IMAGE_LIST_FAILED = 'SET_IMAGE_FAILED'

export const getImageList = () => ({
	type: IMAGE_LIST_REQUESTED
})

export const setImageList = imageList => ({
	type: IMAGE_LIST_SUCCEEDED,
	payload: {
		imageList: imageList
	}
})

export const setImageListFailed = failedMessage => ({
	type: IMAGE_LIST_FAILED,
	payload: {
		failedMessage: failedMessage
	}
})
