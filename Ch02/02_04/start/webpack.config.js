module.exports = {
	entry: './main.coffee',
	output: {
		path: 'build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.coffee$/,
				exclude: /(node_modules)/,
				loader: 'coffee',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};