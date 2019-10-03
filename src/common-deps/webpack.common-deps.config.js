const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'common-deps.js'),
    output: {
        filename: 'common-deps.js',
        path: path.resolve(__dirname, 'build/common-deps'),
        chunkFilename: '[name].js',
    },
    mode: 'development',
    node: {
        fs: 'empty',
    },
    resolve: {
        modules: [
            __dirname,
            'node_modules',
        ],
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },
    devtool: 'sourcemap',
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build/common-deps/']
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, 'common-deps.js') }
        ]),
    ],
    module: {
        rules: [
            { parser: { System: false } },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}