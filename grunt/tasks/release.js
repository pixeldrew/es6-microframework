module.exports = function(grunt) {

    grunt.registerTask('release', [
        'default',
        'stylus:release',
        'sync:release',
        'requirejs:release',
        'uglify:release',
        'regex-replace:release'
    ]);
};
