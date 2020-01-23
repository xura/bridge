import start from '../wds';
import { NormalModuleReplacementPlugin } from 'webpack';

const webpackPlugins = [
    new NormalModuleReplacementPlugin(/typeorm$/, function (result: { request: string; }) {
        result.request = result.request.replace(/typeorm/, "typeorm/browser");
    })
]

const loaders = [
    {
        test: /\.ts$/,
        loader: 'ts-loader'
    }
]

start({
    name: 'emporium',
    entry: '../../emporium/src/index.ts',
    libraryTarget: 'umd',
    webpackPlugins,
    babelPluginOptions: {
        customElementClasses: false,
        typescriptMetaData: false
    },
    loaders
})