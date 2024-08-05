const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/login/kakao",
    createProxyMiddleware({
      target: "http://52.78.121.130:8080",
      changeOrigin: true,
    })
  );
};
