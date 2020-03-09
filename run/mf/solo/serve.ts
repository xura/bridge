const handler = require('serve-handler');
const http = require('http');
const serveOptions = {
    public: "./dist",
    rewrites: [
        {
            "source": "saturn/**",
            "destination": "./index.html"
        },
        {
            "source": "madrox/**",
            "destination": "./index.html"
        }
    ]
};
const server = http.createServer((request: any, response: any) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/zeit/serve-handler#options
    return handler(request, response, serveOptions);
})

server.listen(3001, () => {
    console.log('Running at http://localhost:3000');
});