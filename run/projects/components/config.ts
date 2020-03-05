import { BuildConfiguration } from '../../build';

const config: BuildConfiguration = {
    name: 'components',
    entry: '../../components/src/index.ts',
    babelPluginOptions: {
        customElementClasses: false,
        legacyDecorators: false,
        transformClasses: false
    }
}

export default config;