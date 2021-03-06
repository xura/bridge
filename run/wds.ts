import webpack from 'webpack';
import base, { BuildConfiguration } from './build';

export default (buildConfig: BuildConfiguration): void => {
    webpack(base(buildConfig)).watch({
        aggregateTimeout: 300,
        poll: undefined
    }, (err, stats) => {
        if (err || stats.hasErrors()) {
            const errors =
                stats.hasErrors()
                && stats.compilation.errors.map(e => e.message)

            console.log(JSON.stringify(
                (err && [err.toString()]) || errors)
            )
        } else {
            console.log(JSON.stringify(null));
        }
    });
};