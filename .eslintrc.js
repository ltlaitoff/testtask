module.exports = {
	root: true,
	extends: '@react-native-community',
	plugins: ['react', 'prettier'],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['warn', 'single'],
		semi: ['error', 'never']
	}
}
