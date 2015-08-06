##Usage
###Install
	npm install gulp-git-branch --save
	
##Example

	```js
	var gulp = require('gulp');
	var git = require('gulp-git');
	
	//Run git local branch list
	gulp.task('branch', function() {
		return gulp.src('./your_git_dir/*')
			.pipe(git.branch('list', {
				args: '-l --list'
			}));
	});
	// Get all branch list
	gulp.task('branch', function() {
		return gulp.src('./your_git_dir/*')
			.pipe(git.branch('list', {
				args: '-a --all'
			}));
	});
	
	// Get remote branch list
	gulp.task('branch', function() {
		return gulp.src('./your_git_dir/*')
			.pipe(git.branch('list', {
				args: '-r --remote'
			}));
	});
	
	// Get current branch of local
	gulp.task('branch', function() {
		return gulp.src('./your_git_dir/*')
			.pipe(git.branch('list', {
				isHEAD: true
			}));
	});
	```

##API
### todo
