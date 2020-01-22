import { Configuration, Plugin, RuleSetRule } from "webpack";
import * as path from 'path';

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

export type PluginOptions = {
    legacyDecorators?: boolean;
    customElementClasses?: boolean;
    transformClasses?: boolean;
}

export type BuildConfiguration = {
    name: string;
    entry: string;
    webpackPlugins?: Plugin[];
    babelPluginOptions?: PluginOptions;
    loaders?: RuleSetRule[];
    webpackConfig?: Configuration;
}

export default (buildConfig: BuildConfiguration): Configuration => {

    const disableLegacyDecorators = buildConfig.babelPluginOptions?.legacyDecorators === false;
    const decoratorPlugin = ['@babel/plugin-proposal-decorators', {
        legacy: !disableLegacyDecorators,
        ...(disableLegacyDecorators ? { decoratorsBeforeExport: true } : {})
    }]

    const transformCustomElementPlugin = buildConfig.babelPluginOptions?.customElementClasses === false
        ? null
        : ['babel-plugin-transform-custom-element-classes']

    const transformClassPlugin = buildConfig.babelPluginOptions?.transformClasses === false
        ? null
        : ["@babel/plugin-transform-classes", { "loose": true }];

    const plugins = [
        'babel-plugin-transform-typescript-metadata',
        "@babel/plugin-proposal-optional-chaining",
        decoratorPlugin,
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        transformClassPlugin,
        transformCustomElementPlugin
    ]

    return {
        entry: path.resolve(__dirname, buildConfig.entry),
        output: {
            filename: `${buildConfig.name}.js`,
            library: `${buildConfig.name}`,
            libraryTarget: 'amd',
            path: path.resolve(__dirname, `build/${buildConfig.name}`),
        },
        mode: 'development',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            modules: [
                __dirname,
                'node_modules',
            ],
        },
        module: {
            rules: [
                {
                    test: /(\.tsx?|\.js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            plugins: plugins.filter(plugin => plugin !== null),
                            presets: [
                                ["@babel/preset-env", {
                                    "targets": {
                                        "browsers": ["last 2 versions", "ie >= 11"]
                                    },
                                    "exclude": ["transform-classes"]
                                }],
                                ['@babel/preset-typescript', { jsxPragma: "h" }]
                            ]
                        }
                    }
                },
                ...buildConfig.loaders || []
            ]
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: [`build/${buildConfig.name}`]
            }),
            ...buildConfig.webpackPlugins || []
        ],
        devtool: 'source-map',
        externals: [
            /^@xura\/emporium$/,
            /^@xura\/components$/,
            /^@xura\/data$/,
            /^@xura\/feed$/
        ],
        ...buildConfig.webpackConfig
    }
};