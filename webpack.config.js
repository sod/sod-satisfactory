const glob = require('glob');
const {PurgeCSSPlugin} = require('purgecss-webpack-plugin');

const paths = glob.sync('./src/**/*.html', {nodir: true});

module.exports = {
    plugins: [
        new PurgeCSSPlugin({
            only: ['styles'],
            safelist: ['form-control', 'form-floating'],
            paths,
        }),
    ],
};
