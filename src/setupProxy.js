const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        "/http", //첫번째 Path
        createProxyMiddleware({
            target:"http://localhost:8080",
            changeOringin:true,
        })
    );
}