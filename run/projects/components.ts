import start from '../wds';
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
import * as path from 'path';

// TODO is there a way to not have to use a completed different webpack config?
// ts-loader works, but babel-loader doesnt
// but here we can see babel-loader working https://github.com/mzeiher/ce-decorators/blob/master/webpack.config.js
start('components', '../../components/src/index.ts', {
    entry: path.resolve(__dirname, '../../../components/src/index.ts'),
    output: {
        filename: 'components.js',
        library: 'components',
        libraryTarget: 'amd',
        path: path.resolve(__dirname, 'build/comoponents'),
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
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
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build/comoponents']
        }),
    ],
    devtool: 'source-map'
}, [], false)