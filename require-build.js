require('babel/register');

var pkg = require('./package.json'),
    map = require(pkg.directories['js-src'] + '/require-maps');

// requirejs build file processed in grunt
module.exports = {
    baseUrl: '<%= pkg.directories["js-dev"] %>',
    dir: '<%= pkg.directories["js-release"] %>',
    mainConfigFile: '<%= pkg.directories["js-src"] %>/require-config.js',
    optimize: 'none',
    removeCombined: true,
    modules: [
        {
            name: 'site',
            create: true,
            include: [
                'require-lib',
                'react',
                'site-init'
            ],
            insertRequire: ['site-init']
        }
    ],
    map: map
};
