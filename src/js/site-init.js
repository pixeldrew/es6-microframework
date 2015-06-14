import 'browser-polyfill';
import 'babel-helpers';
import requireMaps from 'require-maps';
import $ from 'jquery';
import _ from 'lodash';
import Events from 'backbone-events';
import UUID from 'uuid';

require.config({map: requireMaps});

let site = window.site = window.site || {};

// give events functionality to site.events
_.extend(site, Events);

// iterate through dom on the page and find dom elements with data attribute siteModule and load them
let loadModules = function() {

    let modules = site.modules = site.modules || {},
    moduleCount = $('[data-site-module]').length,
    modulesLoaded = 0;

    return new Promise((resolve, reject) => {

        $('[data-site-module]').each((i, ele) => {

            let $ele = $(ele);

            if (!$ele.data('moduleLoaded')) {

                let moduleId = $ele.data('siteModule');

                // load modules sequentially
                require([ moduleId ], (Module) => {
                    // pass the calling DOM element to init
                    if (Module.init) {
                        Module.init($ele.get(0));
                    }

                    let id = `${moduleId}-${i}-${UUID.v4()}`;

                    $ele.data({
                        moduleId: id,
                        moduleLoaded: true
                    });

                    modules[ id ] = Module;

                    modulesLoaded++;

                    if (modulesLoaded === moduleCount) {
                        resolve(modules);
                    }

                }, (err) => reject(err));
            }
        });
    });
};

let unloadModules = function(domElement) {
    domElement = domElement || document;

    $('[data-site-module]', domElement).each(function eachSiteModule() {
        let moduleId = $(this).data('moduleId'),
        module = site.modules[ moduleId ];

        if (module && module.unload) {
            module.unload(this);
            $(this).removeData('moduleId');
            $(this).removeData('moduleLoaded');
            delete site.modules[ moduleId ];
        }
    });
};

site.on('fragmentLoad', function() {
    loadModules().then(function() {
        console.log('site.loadModules()');
    });
}).trigger('fragmentLoad');

site.loadModules = loadModules;
site.unloadModules = unloadModules;
