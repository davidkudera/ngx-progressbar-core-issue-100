import * as gulp from 'gulp';
import * as gutil from 'gulp-util';
import * as webpack from 'webpack';
import * as path from 'path';
import * as connect from 'gulp-connect';
import getWebpackConfig from './webpack.config';


const root = path.join(__dirname, 'packages', 'my-app');
const src = path.join(root, 'src');
const out = path.join(root, 'public');

gulp.task(`compile`, (done) => {
	const webpackConfig = getWebpackConfig(root, src, out);

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

