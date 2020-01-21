import start from '../wds';
import { Configuration } from 'webpack';

const config: Configuration = {
    node: {
        fs: "empty",
        child_process: "empty"
    }
}

start('common', './common/entry.ts', config)