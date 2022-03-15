import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		width: '100%',
		height: '100%'
	},
	error: {
		marginTop: 60,
		fontSize: 24,
		textAlign: 'center',
		color: '#e9280b'
	},
	list: {
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,

		height: '100%'
	},
	listFooter: {
		marginBottom: 20
	},
	item: {
		marginBottom: 20,
		padding: 10,
		width: '100%',

		backgroundColor: '#ffffff',

		alignItems: 'flex-start',
		borderRadius: 10
	},
	image: {
		width: '100%',
		height: 235,
		resizeMode: 'contain',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20
	},
	footer: {
		// dispay: 'inline-block',
		marginTop: 60
	}
})
