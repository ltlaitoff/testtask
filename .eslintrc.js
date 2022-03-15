module.exports = {
	root: true,
	extends: ['plugin:flowtype-errors/recommended', '@react-native-community'],
	plugins: ['react', 'prettier', 'flowtype'],
	parser: '@babel/eslint-parser',
	rules: {
		'prettier/prettier': 'error'
	}
}
