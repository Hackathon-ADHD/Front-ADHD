const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/login/kakao",
    createProxyMiddleware({
      target: "https://soogo.ba-ro.co.kr",
      changeOrigin: true,
    })
  );
};
