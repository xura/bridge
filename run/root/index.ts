import start from '../wds';
import { Configuration } from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import * as path from 'path';

const webpackConfig: Configuration = {
    node: {
        fs: "empty",
        child_process: "empty"
    },
}

// const webpackPlugins = [
//     new HtmlWebpackPlugin({
//         template: path.resolve(__dirname, "./index.html"),
//         title: "Xura | Bridge"
//     })
// ]

start({
    name: 'root',
    entry: './root/entry.ts',
    webpackConfig,
    // webpackPlugins
})