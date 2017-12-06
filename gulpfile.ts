import * as gulp from 'gulp';
import * as gutil from 'gulp-util';
import * as webpack from 'webpack';
import * as path from 'path';
import * as connect from 'gulp-connect';
import getWebpackConfig from './webpack.config';


const src = path.join(__dirname, 'src');
const out = path.join(__dirname, 'public');

gulp.task(`compile`, (done) => {
	const webpackConfig = getWebpackConfig(src, out);

	webpack(webpackConfig, (err, stats) => {
		if(err) {
			throw new gutil.PluginError('webpack', err);
		}

		gutil.log('[webpack]', stats.toString({
			colors: true
		}));

		done();
	});
});

gulp.task('server', () => {
	connect.server({
		root: __dirname,
		port: 6543,
	});
});

