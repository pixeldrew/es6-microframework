module.exports = {
    dev: {
        files: [
            {
                cwd: '<%=pkg.directories["src"]%>',
                src: '**/*.html',
                dest: '<%=pkg.directories["dev"]%>'
            },
            {
                cwd: '<%=pkg.directories["src"]%>',
                src: 'vendor/**/*.js',
                dest: '<%=pkg.directories["dev"]%>'
            },
            {
                cwd: '<%=pkg.directories["src"]%>',
                src: 'img/**/*',
                dest: '<%=pkg.directories["dev"]%>'
            },
            {
                cwd: '<%=pkg.directories["src"]%>',
                src: 'font/**/*',
                dest: '<%=pkg.directories["dev"]%>'
            }
        ]
    },
    release: {
        files: [
            {
                cwd: '<%=pkg.directories["src"]%>',
                src: '**/*.html',
                dest: '<%=pkg.directories["release"]%>'
            },
            {
                cwd: '<%=pkg.directories["src"]%>',
                src: 'img/**/*',
                dest: '<%=pkg.directories["release"]%>'
            },
            {
                cwd: '<%=pkg.directories["src"]%>',
                src: 'font/**/*',
                dest: '<%=pkg.directories["release"]%>'
            }
        ]
    }
};
