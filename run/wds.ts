import webpack, { Configuration, RuleSetRule } from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import base from './build';
import * as path from 'path';

export default (
    project: string,
    entry: string,
    extra: Configuration = {},
    loaders: RuleSetRule[] = []
) => {

    const baseConfig = base(project, path.resolve(__dirname, entry));

    const config = webpack({
        ...baseConfig,
        module: {
            ...baseConfig.module,
            rules: baseConfig.module?.rules.concat(loaders) || []
        },
        ...extra
    });

    const wdsConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    };

    const server = new WebpackDevServer(config, wdsConfig);
    const port = process.argv[2];

    server.listen(Number(port), 'localhost', function (err) {
        if (err) {
            console.log(err);
        }
        console.log('WebpackDevServer listening at localhost:', port);
    })
};