export const IMAGE_LIST_REQUESTED = 'IMAGE_LIST_REQUESTED'
export const IMAGE_LIST_SUCCEEDED = 'IMAGE_LIST_SUCCEEDED'
export const IMAGE_LIST_FAILED = 'IMAGE_LIST_FAILED'

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
