/* eslint-env node */
const webpack = require('webpack')
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'config.js'),
    output: {
        filename: 'config.js',
        library: 'config',
        libraryTarget: 'amd',
        path: path.resolve(__dirname, 'build'),
    },
    mode: 'development',
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },
    module: {
        rules: [
            { parser: { System: false } },
            {
                test: /\.js?$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
            }
        ],
    },
    resolve: {
        modules: [
            __dirname,
            'node_modules',
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build/config/']
        })
    ],
    devtool: 'source-map',
    externals: [
        /^single-spa$/
    ],
};
