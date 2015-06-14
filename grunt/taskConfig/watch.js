module.exports = {
    options: {
        livereload: true,
        debounceDelay: 200
    },
    sitejs: {
        files: [
            '<%=pkg.directories["js-src"]%>/**/*.js',
            '<%=pkg.directories["js-src"]%>/**/*.jsx'
        ],
        tasks: ['babel:dev']
    },
    sitehtml: {
        files: [
            '<%=pkg.directories["src"]%>/**/*.html',
            '<%=pkg.directories["src"]%>/img/**/*',
            '<%=pkg.directories["src"]%>/vendor/**/*.js'
        ],
        tasks: ['sync:dev']
    }
};
