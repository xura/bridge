const commonDependencies = {
    imports: {
        'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js',
        'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js',
        'react-dom/server': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom-server.browser.production.min.js',
        'single-spa': 'https://unpkg.com/single-spa@4.3.2/lib/umd/single-spa.min.js',
        'lodash': 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js',
        'rxjs': 'https://unpkg.com/rxjs@6.4.0/bundles/rxjs.umd.min.js',
    }
}

const newScript = document.createElement('script')
newScript.type = 'systemjs-importmap'
newScript.text = JSON.stringify(commonDependencies)
const allMaps = document.querySelectorAll('script[type="systemjs-importmap"]')

allMaps[allMaps.length - 1].insertAdjacentElement(
    'afterend',
    newScript
)