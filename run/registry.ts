import * as path from 'path';

const relPath = (file: string) => path.resolve(__dirname, file);

// TODO this should just parse the files in the "projects" folder and spit out the appripriate project configs
export default [
    ['root', `ts-node ${relPath('./root')}`, 3000],
    ['common', `ts-node ${relPath('./common')}`, 3001],
    ['components', `ts-node ${relPath('./projects/components')}`, 3002],
    ['data', `ts-node ${relPath('./projects/data.ts')}`, 3003],
    ['emporium', `ts-node ${relPath('./projects/emporium.ts')}`, 3004],
    ['feed', `ts-node ${relPath('./projects/feed')}`, 3005],
]
