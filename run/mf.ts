import concurrently from 'concurrently';
import * as path from 'path';

const relPath = (file: string) => path.resolve(__dirname, file)

concurrently([
    {
        command: `ts-node ${relPath('./mf/components.ts')}`,
        name: 'mf-components'
    }
]);