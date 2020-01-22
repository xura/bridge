import start from '../wds';

start({
    name: 'components',
    entry: '../../components/src/index.ts',
    babelPluginOptions: {
        customElementClasses: false,
        legacyDecorators: false,
        transformClasses: false
    }
})