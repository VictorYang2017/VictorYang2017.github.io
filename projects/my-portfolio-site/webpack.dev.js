const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['@babel/polyfill', './index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		open: true,
		port: 8080,
		client: {
			overlay: {
				warnings: true,
				errors: true,
			},
		},
	},
	stats: 'minimal',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				type: 'javascript/auto',
				test: /\.json$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'data/',
						},
					},
				],
			},
			{
				type: 'javascript/auto',
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							esModule: false,
							outputPath: 'assets/images/',
						},
					},
				],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'home',
			filename: 'index.html',
			template: './html/index.html',
		}),
		new HtmlWebpackPlugin({
			title: 'project',
			filename: 'project.html',
			template: './html/project.html',
		}),
	],
};
