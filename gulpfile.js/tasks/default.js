var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');
var config        = require('../config');

var jstask = config.tasks.js.webpackEnable ? 'webpack' : 'js';

var defaultTask = function(cb) {
	// gulpSequence('clean', 'sprites', tasks.assetTasks, tasks.codeTasks, 'watch', cb)
	gulpSequence('clean',
	             ['sprites', 'fonts', 'images', 'svgSprite'],
	             ['css', 'html'],
	             jstask,
	             'watch', cb);
}

gulp.task('default', defaultTask)
