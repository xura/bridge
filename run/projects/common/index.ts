import start from '../../wds';
import { Configuration } from 'webpack';
//import * as path from 'path';

const webpackConfig: Configuration = {
    // output: {
    //     filename: 'common.js',
    //     path: path.resolve(__dirname, 'build'),
    //     chunkFilename: '[name].js',
    // },
    node: {
        fs: "empty",
        child_process: "empty"
    }
}

start({
    name: 'common',
    entry: './projects/common/entry.ts',
    webpackConfig
})
