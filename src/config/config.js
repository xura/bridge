import { registerApplication, start } from 'single-spa'
import { connect, data } from '@xura/data';

connect().then(connection => {
    registerApplication(
        'home',
        () => SystemJS.import('@xura/feed'),
        () => true
    );

    start();
    return data(connection);
});