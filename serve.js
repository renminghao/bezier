const webpack = require('webpack');
const webpackDev = require('webpack-dev-server');
const open = require('open');

const config = require('./webpack.js')

const compaire = webpack(config);

const app = new webpackDev(compaire, {
  hot : true,
  publicPath : '/static/',
  historyApiFallback : false,
  stats : {
			colors:true,
			process : true
	},
  headers : {'X-Custom-Header' : 'yes'},
  disableHostCheck : true
})

app.listen(80, function (err) {
  console.log('listen...');
  if(err) {console.log(err)}
  open('http://localhost/index.html')
})
