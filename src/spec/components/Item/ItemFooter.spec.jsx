/**
 * @format
 */

import 'react-native'
import React from 'react'
import ItemFooter from 'components/Item/components/ItemFooter'

import { render, fireEvent, cleanup } from '@testing-library/react-native'
import '@testing-library/jest-dom'

const testData = {
	userUrl: 'userUrl',
	userLogoUrl: 'userLogoUrl',
	userName: 'userName',
	likesCount: 10,
	liked: false
}

jest.mock('assets/images/favicons/Heart', props => {
	const MockHeartComponent = props => {
		return <div {...props} accessibilityRole={'heart'} />
	}

	return MockHeartComponent
})

describe('ItemFooter component', () => {
	let wrapper

	beforeEach(() => {
		wrapper = render(<ItemFooter {...testData} />)
	})

	afterEach(() => {
		cleanup()
	})

	it('ItemFooter should be not a null', () => {
		expect(wrapper).not.toBeNull()
	})

	it('UserLogo should be not a null', () => {
		const image = wrapper.getByRole('image')

		expect(image).not.toBeNull()
	})

	it('userLogo should have a link uri userLogoUrl', () => {
		const image = wrapper.getByRole('image')

		expect(image.props.source.uri).toBe('userLogoUrl')
	})

	it('Heart icon should be not a null', () => {
		const image = wrapper.getByRole('heart')

		expect(image).not.toBeNull()
	})

	it('OnClick on user TouchableOpacity must ope', () => {
		const image = wrapper.getByRole('heart')

		expect(image).not.toBeNull()
	})

	describe.each`
		liked    | fill
		${true}  | ${'#c83db7'}
		${false} | ${'#6c6f78'}
	`('Heart liked = $liked and fill should be $fill', ({ liked, fill }) => {
		const { getByRole } = render(<ItemFooter {...testData} liked={liked} />)
		const image = getByRole('heart')

		expect(image.props.fill === fill).toBe(true)
	})

	describe.each`
		value
		${'userName'}
		${'10'}
	`('text = $value should been in the ItemFooter', ({ prop, value }) => {
		const { getByText } = render(<ItemFooter {...testData} />)

		expect(getByText(value)).not.toBeNull()
	})
})
