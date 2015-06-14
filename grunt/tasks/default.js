module.exports = function(grunt) {

    grunt.registerTask('default', [
        'sync:dev',
        'stylus:dev',
        'bower:dev',
        'babel:dev'
    ]);
};
