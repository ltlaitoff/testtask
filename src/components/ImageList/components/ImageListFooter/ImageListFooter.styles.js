import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	wrapper: {
		marginTop: 10,
		display: 'flex',
		paddingBottom: 5
	},
	left: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	userIcon: {
		// display: 'inline-block',
		width: 40,
		height: 40,
		borderRadius: 50
	},
	username: {
		marginLeft: 10,
		fontFamily: 'Roboto',
		fontWeight: '700',
		fontSize: 18
		// display: 'inline-block'
	}
})
