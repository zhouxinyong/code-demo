'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./db/config');
var User = require('./models/user');
mongoose.connect(config.db);
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(function(err, req, res, next) {
	if (err) {
		res.json({
			err: err
		})
	}
	return;
})

app.use(bodyParser.json());

var port = process.env.port || 8080;

var router = express.Router();

router.get('/', function(req, res) {

	res.json({
		message: 'hello world'
	})
})

router.route('/users')
	.post(function(req, res) {
		var user = new User();
		user.name = req.body.name;
		user.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({
				message: 'user created!'
			})
		})
	})
	.get(function(req, res) {
		User.find(function(err, users) {
			if (err) {
				res.send(err);
			}
			res.json(users);
		})
	});
router.route('/users/:user_id')
	.get(function(req, res) {
		console.log(req.params);
		User.findById(req.params.user_id, function(err, user) {
			if (err) {
				res.send(err);
			}
			res.json(user);
		})
	})
	.put(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {
			if (err) {
				res.send(err);
			}

			user.name = req.body.name;

			user.save(function(err) {
				if (err) {
					res.send(err);
				}
				res.json({
					message: req.params.user_id + ' ' + req.body.name + ' updated'
				})
			})
		})
	})
	.delete(function(req, res) {
		User.remove({
			_id: req.params.user_id
		}, function(err, user) {
			if (err) {
				res.send(err);
			}
			res.json({
				message: req.params.user_id + ' has been deleted!'
			})
		})
	})

app.use('/api', router);

app.listen(port);

console.log('server is listening on:' + port);