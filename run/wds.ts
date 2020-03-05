import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import buildWebpackConfig, { BuildConfiguration } from './build';

export default (buildConfig: BuildConfiguration, portNumber?: number): void => {

    const wdsConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    };

    new WebpackDevServer(
        webpack(buildWebpackConfig(buildConfig)),
        wdsConfig
    ).listen(Number(portNumber || process.argv[2]));;

};