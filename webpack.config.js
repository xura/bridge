const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const fs = require('fs');

module.exports = {
    mode: 'development',
    entry: {
        // Set the single-spa config as the project entry point
        'single-spa.config': './single-spa.config.js',
    },
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.elm$/,
                exclude: function (modulePath) {
                    return /node_modules/.test(modulePath) &&
                        !/node_modules\/@xura\/feed/.test(modulePath);
                },
                use: {
                    loader: 'elm-webpack-loader',
                    options: {
                        cwd: __dirname + '/node_modules/@xura/feed/elm'
                    }
                }
            }, {
                test: /\.js|jsx$/,
                exclude: function (modulePath) {
                    return /node_modules/.test(modulePath) &&
                        !/node_modules\/@xura/.test(modulePath);
                },
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-react',
                            {
                                plugins: [
                                    '@babel/plugin-proposal-class-properties'
                                ]
                            }
                        ]
                    }
                },

            }
        ],
    },
    node: {
        fs: 'empty'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
    },
    plugins: [
        // A webpack plugin to remove/clean the output folder before building
        new CleanWebpackPlugin(),
    ],
    devtool: 'source-map',
    externals: [],
    devServer: {
        historyApiFallback: true
    }
};