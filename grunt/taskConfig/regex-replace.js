module.exports = {
    release: {
        src: ['<%= pkg.directories["release"] %>/**/*.html'],
        actions: [
            {
                name: 'require-site',
                search: '<script src="lib/requirejs/require.js" data-main="require-config"></script>',
                replace: '<script src="/js/site.js"></script>',
                flags: 'g'
            }
        ]
    }
};