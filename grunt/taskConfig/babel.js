module.exports = {
    options: {
        modules: 'amd',
        sourceMap: 'inline',
        optional: ['spec.protoToAssign'],
        loose: ['es6.classes', 'es6.properties.computed'],
        externalHelpers: true
    },
    dev: {
        files: [
            {
                expand: true,
                cwd: '<%=pkg.directories["js-src"]%>',
                src: ['**/*.js', '**/*.jsx'],
                dest: '<%=pkg.directories["js-dev"]%>',
                ext: '.js'
            }
        ]
    }
};
