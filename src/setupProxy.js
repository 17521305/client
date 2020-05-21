const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://devices-rental-server.herokuapp.com',
            changeOrigin: true,
        })
    );
};