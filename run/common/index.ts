import start from '../wds';
import { Configuration } from 'webpack';

const config: Configuration = {
    node: {
        fs: "empty",
        child_process: "empty"
    }
}

start(process.argv[2], 'common', './index.ts', config)