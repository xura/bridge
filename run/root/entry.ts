import { registerApplication, start } from 'single-spa'
import { connect, data } from '@xura/data';

const System = require('systemjs');

connect().then(_ => {
    registerApplication(
        'home',
        () => System.import('@xura/feed'),
        () => true
    );
});

start();