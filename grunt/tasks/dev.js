module.exports = function(grunt) {

    grunt.registerTask('dev', [
        'sync:dev',
        'stylus:dev',
        'bower:dev',
        'babel:dev',
        'connect:dev',
        'watch'
    ]);
};
