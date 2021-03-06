import concurrently from 'concurrently';
import registry from './registry';
import path from 'path'
import { exec } from 'shelljs';

const relPath = (file: string) => path.resolve(__dirname, file);

const wdsCommands = registry.map(project => ({
    command: `${project[1]} ${project[2]}`.toString() || '',
    name: project[0]?.toString() || ''
}));

const mason = {
    command: `yarn --cwd ${relPath('../../mason')} start`,
    name: "mason"
};

new Promise(resolve => {
    exec(`zeus ${relPath("../../mason/schema.gql")} ${relPath("../../emporium")} --ts`, { async: true }, () => resolve());
}).then(() =>
    concurrently([...wdsCommands, mason])
);
