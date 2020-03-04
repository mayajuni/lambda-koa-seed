const path = require('path');
const slsw = require('serverless-webpack');
const TSLintPlugin = require('tslint-webpack-plugin');
const nodeExternals = require('webpack-node-externals');


const entries = {};

Object.keys(slsw.lib.entries).forEach(
    key => (entries[key] = ['./source-map-install.js', slsw.lib.entries[key]])
);

const webpackConfig = {
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    entry: entries,
    devtool: 'source-map',
    node: {
        __dirname: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    target: 'node',
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {test: /\.tsx?$/, loader: 'ts-loader'},
        ],
    },
    plugins: [
        new TSLintPlugin({
            files: ['./src/**/*.ts']
        })
    ]
};

webpackConfig.externals = [nodeExternals()];

module.exports = webpackConfig;
