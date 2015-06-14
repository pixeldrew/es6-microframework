require({
    paths: {
        'browser-polyfill': '../vendor/browser-polyfill',
        'babel-helpers': '../vendor/babel-helpers',
        'require-lib': '../lib/requirejs/require',
        'jquery': '../lib/jquery/jquery',
        'backbone-events': '../lib/backbone-events/backbone-events',
        'lodash': '../lib/lodash/lodash',
        'uuid': '../lib/node-uuid/uuid',
        'react': '../lib/react/react'
    },
    shim: {
        'babel-helpers': {
            deps: ['browser-polyfill']
        }
    }

}, ['site-init']);
