import start from '../wds';
import { Configuration } from 'webpack';
import * as path from 'path';

const webpackConfig: Configuration = {
    output: {
        filename: 'common.js',
        path: path.resolve(__dirname, 'build/common'),
        chunkFilename: '[name].js',
    },
    node: {
        fs: "empty",
        child_process: "empty"
    }
}

start({
    name: 'commin',
    entry: './common/entry.ts',
    webpackConfig
})
