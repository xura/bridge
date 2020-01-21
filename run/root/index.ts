import start from '../wds';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';

const config: Configuration = {
    node: {
        fs: "empty",
        child_process: "empty"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            title: "Xura | Bridge"
        })
    ]
}

start('root', './root/entry.ts', config)