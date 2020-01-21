import webpack, { Configuration } from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import base from './build';
import * as path from 'path';

export default (port: string, project: string, entry: string, extra: Configuration = {}) => {

    const config = webpack({
        ...base(project, path.resolve(__dirname, entry)),
        ...extra
    });

    const wdsConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    };

    const server = new WebpackDevServer(config, wdsConfig);

    server.listen(Number(port), 'localhost', function (err) {
        if (err) {
            console.log(err);
        }
        console.log('WebpackDevServer listening at localhost:', port);
    })
};