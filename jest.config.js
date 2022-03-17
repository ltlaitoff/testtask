module.exports = {
	preset: 'react-native',
	setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest'
	},

	transformIgnorePatterns: [
		'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)'
	],

	globals: {
		__DEV__: true
	}
}
