import * as React from 'react'
import { SvgUri } from 'react-native-svg'

const Heart = props => (
	<SvgUri
		width='100%'
		height='100%'
		uri='http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'
		{...props}
	/>
)

export default Heart
