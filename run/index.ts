import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import base from './build.config';
import * as path from 'path';

const PORT = 3000;

const server = new WebpackDevServer(webpack(base('components', path.resolve(__dirname, '../../components/src/index.ts'))), {
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});

server.listen(PORT, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('WebpackDevServer listening at localhost:', PORT);
});