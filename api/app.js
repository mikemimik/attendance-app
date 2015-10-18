var bodyParser = require('body-parser');
var epilogue = require('epilogue');
var express = require('express');
var http = require('http');

var config = require('./libs/config');
var db = require('./libs/db');
var seed = require('./libs/seed');
var model = require('./models');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var server = http.createServer(app).listen(config.app.port);

epilogue.initialize({
  app: app,
  sequelize: db.sequelize
});

var memberResource = epilogue.resource({
  model: model.Member,
  endpoints: [ '/member', '/member/:memberId' ],
  include: [ { model: model.Group }]
});

var levelResource = epilogue.resource({
  model: model.Level,
  endpoints: [ '/level', '/level/:levelId']
});

var dayResource = epilogue.resource({
  model: model.TrainingDay,
  endpoints: [ '/trainingday', '/trainingday/:trainingDayId' ]
});

var groupResource = epilogue.resource({
  model: model.Group,
  endpoints: [ '/group', '/group/:groupId' ]
});

db.sequelize
  .sync({ force: true })
  .then(seed.init)
  .then(function() {
    server.listen(function() {
      var host = server.address().address;
      var port = server.address().port;
      console.log('server initialized');
      console.log('server listening');
      console.log('host: ', host);
      console.log('port: ', port);
    });
  });