import 'reflect-metadata'
import { registerApplication, start } from 'single-spa'
import { connect, data } from '@xura/data';

connect().then(_ => {
    // @ts-ignore
    window.d = data;
    // @ts-ignore
    data.achievements.form('insert-here')
    registerApplication(
        'home',
        // @ts-ignore
        () => System.import('@xura/feed'),
        () => true
    );
});


start();
