import { registerApplication, start } from 'single-spa'
import { connect, data } from '@xura/data';

connect().then(_ => {
    window.d = data;
    registerApplication(
        'home',
        () => SystemJS.import('@xura/feed'),
        () => true
    );
    // registerApplication(
    //     'components',
    //     () => SystemJS.import('@xura/components'),
    //     () => true
    // );

});

start();