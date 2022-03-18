/**
 * @format
 */

import * as ReactNative from 'react-native'
import React from 'react'
import FullScreenImage from 'components/FullScreenImage'

import { render, cleanup } from '@testing-library/react-native'
import '@testing-library/jest-dom'

const imageUrl = 'imageUrl'

jest.mock('react-redux', () => {
	return {
		useSelector: jest.fn().mockImplementation(() => {
			return imageUrl
		})
	}
})

jest.mock('react-native/Libraries/Image/Image', () => ({
	...jest.requireActual('react-native/Libraries/Image/Image'),
	getSize: (imageUrlFn, callback) => {
		return callback(100, 50)
	}
}))

describe('FullScreenImage component', () => {
	let wrapper

	beforeEach(() => {
		wrapper = render(<FullScreenImage />)
	})

	afterEach(() => {
		cleanup()
	})

	it('FullScreenImage should be not be null', () => {
		expect(wrapper).not.toBeNull()
	})
})
