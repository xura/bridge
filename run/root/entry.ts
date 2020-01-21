import { registerApplication, start } from 'single-spa'
import { connect, data } from '@xura/data';

connect().then(_ => {
    registerApplication(
        'home',
        // @ts-ignore
        () => SystemJS.import('@xura/feed'),
        () => true
    );
});

start();