import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		padding: 20,
		height: '100%'
	},
	list: {
		height: '100%'
	},
	item: {
		padding: 10,
		width: '100%',
		// height: 500,
		backgroundColor: 'red',
		// display: 'flex',
		// rowGap: 10,
		alignItems: 'flex-start',
		borderRadius: 25
	},
	image: {
		width: '100%',
		height: 240,
		resizeMode: 'contain',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10
	},
	footer: {
		// dispay: 'inline-block',
		marginTop: 60
	}
})
