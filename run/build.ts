import { Configuration } from "webpack";
import * as path from 'path';

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

export default (name: string, entry: string): Configuration => ({
    entry,
    output: {
        filename: `${name}.js`,
        library: `${name}`,
        libraryTarget: 'amd',
        path: path.resolve(__dirname, `build/${name}`),
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: [
            __dirname,
            'node_modules',
        ],
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
            cleanAfterEveryBuildPatterns: [`build/${name}`]
        }),
    ],
    devtool: 'source-map'
});