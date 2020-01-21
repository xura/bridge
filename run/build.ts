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
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            'babel-plugin-transform-typescript-metadata',
                            ['@babel/plugin-proposal-decorators', { legacy: true }],
                            '@babel/plugin-proposal-class-properties',
                            "@babel/plugin-proposal-optional-chaining"
                        ],
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-typescript', { jsxPragma: "h" }]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: [`build/${name}`]
        }),
    ],
    devtool: 'source-map',
    externals: [
        /^@xura\/emporium$/,
        /^@xura\/components$/,
        /^@xura\/data$/,
        /^systemjs$/
    ]
});