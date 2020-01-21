import singleSpaHtml from 'single-spa-html';
import '../../../../feed/src/index';

const htmlLifecycles = singleSpaHtml({
    template: '<feed-div></feed-div>',
});

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;