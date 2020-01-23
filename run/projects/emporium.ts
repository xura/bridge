import start from '../wds';
import { NormalModuleReplacementPlugin } from 'webpack';
import * as path from 'path'

const webpackPlugins = [
    new NormalModuleReplacementPlugin(/typeorm$/, function (result: { request: string; }) {
        result.request = result.request.replace(/typeorm/, "typeorm/browser");
    })
]

start({
    name: 'emporium',
    entry: '../../emporium/src/index.ts',
    libraryTarget: 'umd',
    webpackPlugins,
    webpackConfig: {
        entry: path.resolve(__dirname, '../../../emporium/src/index.ts'),
        output: {
            filename: 'emporium.js',
            path: path.resolve(__dirname, 'build/emporium'),
            library: 'emporium',
            libraryTarget: 'umd'
        },
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        },
        module: {
            rules: [
                { parser: { System: false } },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new NormalModuleReplacementPlugin(/typeorm$/, function (result: { request: string; }) {
                result.request = result.request.replace(/typeorm/, "typeorm/browser");
            }),
        ],
        resolve: {
            modules: [
                __dirname,
                'node_modules',
            ],
            extensions: ['.tsx', '.ts', '.js']
        },
        devtool: 'source-map',
        externals: [
            /^rxjs$/
        ],
    }
})