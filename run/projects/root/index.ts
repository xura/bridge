import start from '../../wds';
import { Configuration } from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const webpackConfig: Configuration = {
    node: {
        fs: "empty",
        child_process: "empty"
    },
}

const webpackPlugins = [
    new CopyWebpackPlugin([
        { from: 'node_modules/sql.js/dist/sql-wasm.js' },
        { from: 'node_modules/sql.js/dist/sql-wasm.wasm' }
    ])
]

start({
    name: 'root',
    entry: './projects/root/entry.ts',
    webpackConfig,
    webpackPlugins
})