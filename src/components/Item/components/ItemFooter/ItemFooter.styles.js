import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	wrapper: {
		marginTop: 10,
		paddingLeft: 5,
		paddingRight: 20,

		width: '100%',

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 5
	},
	left: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	right: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	userIconView: {
		borderRadius: 50,
		borderColor: '#611eb1',
		borderWidth: 1
	},
	userIcon: {
		width: 40,
		height: 40,
		borderRadius: 50,
		borderColor: '#fff',
		borderWidth: 2
	},
	username: {
		marginLeft: 10,
		fontWeight: '500',
		fontSize: 18,
		color: '#1e183c'
	},
	likeIcon: {
		width: 30,
		height: 30
	},
	likeText: {
		marginLeft: 10,
		fontFamily: 'Roboto',
		fontWeight: '700',
		fontSize: 18,
		color: '#611eb1'
	}
})
