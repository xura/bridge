import { registerApplication, start } from 'single-spa'
import { connect, data } from '@xura/data';

// @ts-ignore
window.emp = await connect()
    .then(connection => data(connection))

registerApplication(
    // Name of our single-spa application
    'home',
    // loadingFunction
    () => SystemJS.import('@xura/feed'),
    // activityFunction
    () => true
);

// registerApplication(
//     // Name of our single-spa application
//     'navBar',
//     // loadingFunction
//     () => import('./src/navBar.app.js'),
//     // activityFunction
//     () => true
// );

start();