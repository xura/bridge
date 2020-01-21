import concurrently from 'concurrently';
import registry from './registry';

const wdsCommands = registry.map(project => ({
    command: `${project[1]} ${project[2]}`.toString() || '',
    name: project[0]?.toString() || ''
}));

concurrently([...wdsCommands]);