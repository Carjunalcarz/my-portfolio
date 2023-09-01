// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Change this to match the proxy path you want to use in your app
    createProxyMiddleware({
      target: 'http://192.168.16.1', // Change this to your MikroTik router's IP
      secure: false, // Set to false if using HTTP, true if using HTTPS
      changeOrigin: true, // Change the origin of the request to match the target
      auth: 'admin:ajncarz123' // Replace with your MikroTik credentials
    })
  );
};