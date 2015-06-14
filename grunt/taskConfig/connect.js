/**
 * Grunt task configuration - clean
 */
module.exports = {
    dev: {
        options: {
            port: 8080,
            hostname: 'localhost',
            base: '<%=pkg.directories["dev"] %>',
            directory: '<%=pkg.directories["dev"] %>',
            open: true,
            middleware: function (connect, options) {
                var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
                return [
                    // Include the proxy first
                    proxy,
                    // Serve static files.
                    connect.static(options.base[0]),
                    // Make empty directories browsable.
                    connect.directory(options.base[0])
                ];
            }
        },
        proxies: [
            //{
            //    context: '/aproxy',
            //    host: 'anyhostorip.com',
            //    port: 8000,
            //    https: false
            //}
        ]
    },
    release: {
        options: {
            port: 8081,
            base: '<%=pkg.directories["release"] %>',
            directory: '<%=pkg.directories["release"] %>',
            keepalive: true,
            middleware: function (connect, options) {
                var compression = require('compression');
                return [
                    compression(),
                    // Serve static files.
                    connect.static(options.base[0]),
                    // Make empty directories browsable.
                    connect.directory(options.base[0])
                ];
            }
        }
    }
};