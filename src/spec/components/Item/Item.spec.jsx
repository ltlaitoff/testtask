/**
 * @format
 */

import 'react-native'
import React from 'react'
import Item from 'components/Item'

import { render, fireEvent, cleanup } from '@testing-library/react-native'
import '@testing-library/jest-dom'

const testData = {
	urls: { regular: 'mainImageUrl', full: 'mainFullImageUrl' },
	user: {
		links: { html: 'userUrl' },
		profile_image: { small: 'userLogoUrl' },
		username: 'userName'
	},
	likes: 10,
	liked_by_user: true
}

const ItemFooter = props => <div {...props} accessibilityRole={'itemFooter'} />

jest.mock('components/Item/components/ItemFooter', props => {
	return ItemFooter
})

jest.mock('react-redux', () => {
	return {
		useDispatch: jest.fn().mockImplementation(() => {
			return jest.fn()
		})
	}
})

const mockSetImage = jest.fn()

jest.mock('store/Image/actions', () => {
	return {
		setImage: props => mockSetImage(props)
	}
})

jest.mock('@react-navigation/native', () => {
	return {
		useNavigation: () => {
			return {
				navigate: jest.fn()
			}
		}
	}
})

describe('Item component', () => {
	let wrapper

	beforeEach(() => {
		wrapper = render(<Item item={testData} />)
	})

	afterEach(() => {
		cleanup()
	})

	it('Item should be not be null', () => {
		expect(wrapper).not.toBeNull()
	})

	it('Image should be not be null', () => {
		const image = wrapper.getByRole('image')

		expect(image).not.toBeNull()
	})

	it('Image source uri should be mainImageUrl', () => {
		const image = wrapper.getByRole('image')

		expect(image.props.source.uri).toBe('mainImageUrl')
	})

	it('On click on TouchableOpacity should be call setImage ', () => {
		const component = wrapper.getByRole('imagebutton')

		fireEvent(component, 'click')

		expect(mockSetImage).toBeCalledWith('mainFullImageUrl')
	})

	describe.each`
		name             | value
		${'userUrl'}     | ${'userUrl'}
		${'userLogoUrl'} | ${'userLogoUrl'}
		${'userName'}    | ${'userName'}
		${'likesCount'}  | ${10}
		${'liked'}       | ${true}
	`('$name prop should have $value', ({ name, value }) => {
		wrapper = render(<Item item={testData} />)
		const itemFooter = wrapper.getByRole('itemFooter')

		expect(itemFooter.props[name]).toBe(value)
	})
})
