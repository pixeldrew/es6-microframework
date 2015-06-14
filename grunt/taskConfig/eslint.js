module.exports = {
    src: {
        files: [
            {
                expand: true,
                cwd: '<%=pkg.directories["js-src"]%>',
                src: '**/*.js'
            },
            {
                expand: true,
                cwd: '<%=pkg.directories["js-src"]%>',
                src: '**/*.jsx'
            }
        ]
    }
};
