var path = require('path'),
	ex = require('express'),
	wp = require('webpack'),
	cfg = require('./webpack.config');

var app = ex();
var cp = wp(cfg);

app.use(require('webpack-dev-middleware')(cp, {
	publicPath: cfg.output.publicPath,
    noInfo: true
}));

app.use(require('webpack-hot-middleware')(cp));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen( 8080, 'localhost', function (err) {
	console.log( 'ready. localhost:8080' );
});
