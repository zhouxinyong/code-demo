// var webpack = require('webpack')
// var webpackDevMiddleware = require('webpack-dev-middleware')
// var webpackHotMiddleware = require('webpack-hot-middleware')
// var config = require('./webpack.config')
//
// var app = new (require('express'))()
// var port = 3000
//
// var compiler = webpack(config)
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config'
import express from 'express'

const app = express()
const port = 3000
const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
	hot: true,
	stats: {
		colors: true
	}
}))
app.use(webpackHotMiddleware(compiler, {
	log: console.log,
	path: '/_webpack_hmr',
	hreatbeat: 10 * 1000
}))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
