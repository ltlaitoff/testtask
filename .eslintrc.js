module.exports = {
	root: true,
	extends: '@react-native-community',
	parser: '@babel/eslint-parser',
	plugins: ['react', 'prettier', 'flowtype'],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['warn', 'single'],
		semi: ['error', 'never']
	}
}
