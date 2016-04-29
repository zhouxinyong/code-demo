'use strict';
var express = require('express')
var path = require('path')
var config = require('./webpack.config')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, './index.html'));
});
const port = 5000;

app.listen(port, () => {
	console.log(`server is listening on ${port}`);
})