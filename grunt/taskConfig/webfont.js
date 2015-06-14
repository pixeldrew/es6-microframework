module.exports = {
    dev: {
        src: '<%= pkg.directories["src"] %>/img/icon/*.svg',
        dest: '<%= pkg.directories["src"] %>/font/',
        destCss: '<%= pkg.directories["src"] %>/styl/',
        options: {
            htmlDemo: false,
            stylesheet: 'styl',
            syntax: 'bootstrap',
            relativeFontPath: '../font/'
        }
    }
};
