import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import base, { BuildConfiguration } from './build';

export default (buildConfig: BuildConfiguration): void => {

    const wdsConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    };

    new WebpackDevServer(
        webpack(base(buildConfig)),
        wdsConfig
    ).listen(Number(process.argv[2]));;

};