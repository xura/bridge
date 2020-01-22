import start from '../wds';
import { Configuration } from 'webpack';

const webpackConfig: Configuration = {
    node: {
        fs: "empty",
        child_process: "empty"
    },
}

start({
    name: 'root',
    entry: './root/entry.ts',
    webpackConfig
})