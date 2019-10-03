import { registerApplication, start } from 'single-spa'

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