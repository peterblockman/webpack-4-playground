module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, //regex anything that match .js .jsx
				exclude: '/node_modules/',
				use: ['babel-loader']
			},
			{
				test: /\.(js|jsx)$/, //regex anything that match .js .jsx
				exclude: '/node_modules/',
				use: ['eslint-loader']
			},
		], 
	},
	resolve: {
		extensions: ['.js', '.jsx'] // set extension js or jsx
	}
}