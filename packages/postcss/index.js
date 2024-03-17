const purgecss = require('@fullhuman/postcss-purgecss');
const {conditionalPlugin} = require('./conditional-plugin');

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
    const production = process.env.POSTCSS_ENV !== 'dev';
    const purgeIgnore = production ? undefined : /styles\.scss$/;
    const purgeCssPlugin = purgecss({
        safelist: ['form-control', 'form-floating'],
        skippedContentGlobs: ['node_modules/**'],
        contentFunction: (file) => {
            if (/component\.scss$/.test(file)) {
                return [file.replace(/scss$/, 'html')];
            }

            return ['./src/**/*.html'];
        },
    });

    return {
        plugins: [conditionalPlugin((file) => !purgeIgnore?.test(file), purgeCssPlugin)],
    };
};

module.exports.postcss = true;
