var process = require("child_process");
var gUtil = require('gulp-util');

module.exports = function (options) {

	function gitBranch(file, enc, next) {
        var self = this;

        // 如果文件为空，不做任何操作，转入下一个操作，即下一个 .pipe()
        if (file.isNull()) {
            this.push(file);
            return next();
        }

        // 插件不支持对stream的直接操作，抛出异常
        if (file.isStream()) {
            this.emit('error', new gUtil.PluginError('gulp-git-branch', 'Streaming not supported'));
            return next();
        }

        var cmd = 'git list ' + opt.args;

        process.exec(cmd, {cwd: cwd}, function(err, stdout, stderr){
      		if (err) {
      			next(err);
      		};
      		if (!opt.quiet) {
      			gutil.log(stdout, stderr);
      		}

      		files.forEach(that.push.bind(that));
      		next();
    	});
    }
    return through2.obj(gitBranch);
}

