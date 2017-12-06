import {AngularCompilerPlugin} from '@ngtools/webpack'
import * as webpack from 'webpack';
import * as path from 'path';


export default function(root: string, src: string, out: string) {
	return {
		devtool: 'source-map',

		entry: {
			app: path.join(src, 'main.ts'),
		},

		output: {
			path: out,
			filename: '[name].js',
			chunkFilename: '[id].chunk.js',
		},

		resolve: {
			extensions: ['.ts', '.js'],
		},

		module: {
			rules: [
				{
					test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
					use: '@ngtools/webpack',
				},
				{
					test: /\.html$/,
					use: 'raw-loader',
				},
			],
		},

		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				name: ['app'],
			}),
			new AngularCompilerPlugin({
				basePath: src,
				tsConfigPath: path.join(root, 'tsconfig.json'),
				entryModule: path.join(src, 'app.module#AppModule'),
				sourceMap: true,
			}),
		],
	};
};
