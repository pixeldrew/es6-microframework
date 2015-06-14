module.exports = {
    release: {
        files: [{
            expand: true,
            cwd: '<%=pkg.directories["js-release"]%>',
            src: ['**/*.js'],
            dest: '<%=pkg.directories["js-release"]%>',
            ext: '.js'
        }]
    }
};