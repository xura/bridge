import start from '../../wds';
import * as path from 'path';

const loader = [
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

start('feed', './projects/feed/entry.js', {}, loader)