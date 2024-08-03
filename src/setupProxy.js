// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/util/v1/shorturl',
//     createProxyMiddleware({
//       target: process.env.REACT_APP_API_PROXY_URL,
//       changeOrigin: true,
//       pathRewrite: { '^/util/v1/shorturl': '/util/v1/shorturl' },
//       onProxyReq: (proxyReq, req, res) => {
//         // 헤더 설정
//         proxyReq.setHeader('X-NCP-APIGW-API-KEY-ID', process.env.REACT_APP_API_KEY_ID);
//         proxyReq.setHeader('X-NCP-APIGW-API-KEY', process.env.REACT_APP_API_KEY_SECRET);
//       },
//     })
//   );
// };
