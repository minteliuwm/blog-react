'use strict';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/main.tsx'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			loaders: ['babel-loader', 'ts-loader'],
			exclude: /node_modules/
		}, {
			test: /\.js|jsx$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader'
		}, {
			test: /\.scss$/,
			exclude: [path.resolve(__dirname, '../src/scss')],
			use: [{
				loader: "style-loader"
			}, {
				loader: "typings-for-css-modules-loader",
				options: {
					modules: true,
					namedExport: true,
					camelCase: true,
					sass: true,
					localIdentName: "[local]_[hash:base64:5]"
				}
			}, {
				loader: "sass-loader"
			}]
		}, {
			test: /\.scss$/,
			include: [path.resolve(__dirname, '../src/scss')],
			loaders: ['style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader']
		}, {
			test: /\.less$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "less-loader",
				options: {
					javascriptEnabled: true
				}
			}]
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			query: {
				limit: 30000,
				name: 'images/[name].[ext]?[hash]'
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: "url-loader",
			options: {
				limit: 10000,
				name: 'font/[name].[ext]?[hash]'
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		}),
		new webpack.WatchIgnorePlugin([/css\.d\.ts$/])
	]
};
