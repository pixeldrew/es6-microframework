module.exports = {
    options: {
        paths: [ './node_modules/normalize-styl' ]
    },
    dev: {
        options: {
            sourcemap: {
                inline: true
            },
            compress: false
        },
        files: {
            '<%=pkg.directories["dev"]%>/css/site.css': [ '<%=pkg.directories["src"]%>/styl/site.styl' ]
        }
    },
    release: {
        files: {
            '<%=pkg.directories["release"]%>/css/site.css': [ '<%=pkg.directories["src"]%>/styl/site.styl' ]
        }
    }
};
