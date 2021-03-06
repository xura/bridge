import start from '../wds';
import { NormalModuleReplacementPlugin } from 'webpack';

const webpackPlugins = [
    new NormalModuleReplacementPlugin(/typeorm$/, function (result: { request: string; }) {
        result.request = result.request.replace(/typeorm/, "typeorm/browser");
    })
]

start({
    name: 'data',
    entry: '../../data/src/index.ts',
    webpackPlugins
})