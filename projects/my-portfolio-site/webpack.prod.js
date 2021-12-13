const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js',
		clean: true,
	},
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
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
			filename: 'index.html',
			template: './html/index.html',
			minify: true,
		}),
		new HtmlWebpackPlugin({
			filename: 'project.html',
			template: './html/project.html',
			minify: true,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/style.css',
		}),
	],
};
