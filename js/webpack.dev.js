const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, '..', 'assets', 'js'),
		filename: '[name].js',
	},
});
