module.exports = {
	entry: './src/main.js',
	output: {
		path: 'build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				test: /\.js$/,
				exclude: /(node_modules)/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};
