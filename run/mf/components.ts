import { BuildConfiguration } from '../build';
import componentsConfig from '../projects/components/config';
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
import { Plugin } from "webpack";
import registry from '../registry';
import start from '../wds';

(async function () {
    const moduleFederationPlugin: Plugin[] = [
        new ModuleFederationPlugin({
            name: "components",
            library: { type: "var", name: "components" },
            exposes: {
                Components: "../components/src/index.ts"
            }
            // shared: ["react", "react-dom", "@material-ui/core", "react-router-dom"]
        })
    ]

    const componentsPortNumber = new Promise<number>(resolve => {
        const componentEntry = registry.find(entry => entry[0] === 'components');
        resolve(componentEntry ? Number(componentEntry[2]) : 0);
    });

    const config: BuildConfiguration = {
        ...componentsConfig,
        webpackPlugins: moduleFederationPlugin,
        webpackConfig: {
            output: {
                publicPath: `http://localhost:${await componentsPortNumber}/`
            }
        }
    };

    start(config, await componentsPortNumber);

})()
