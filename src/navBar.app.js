import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import NavBar from '@xura/components';

function domElementGetter() {
    return document.getElementById("navBar")
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: NavBar,
    domElementGetter,
});

export const bootstrap = [
    reactLifecycles.bootstrap,
];

export const mount = [
    reactLifecycles.mount,
];

export const unmount = [
    reactLifecycles.unmount,
];