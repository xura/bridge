import start from '../../wds';
import * as path from 'path';

const loaders = [
    {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
            { loader: "elm-hot-webpack-loader" },
            {
                loader: "elm-webpack-loader",
                options: {
                    forceWatch: true,
                    cwd: path.resolve(__dirname, '../../../../feed/src/elm')
                }
            }
        ]
    }
]

start({
    name: 'feed',
    entry: './projects/feed/entry.js',
    loaders
})