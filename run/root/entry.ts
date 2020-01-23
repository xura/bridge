import 'reflect-metadata'
import { registerApplication, start } from 'single-spa'
import { connect, data } from '@xura/data';

debugger;
connect().then(_ => {
    debugger;
    registerApplication(
        'home',
        // @ts-ignore
        () => System.import('@xura/feed'),
        () => true
    );
});

start();