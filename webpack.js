var webpack = require('webpack')
var path = require('path')

module.exports = {
  context : process.cwd(),
  entry : {
    index : './lib/index.js'
  },
  output : {
    filename : '[name].js',
    path : path.join(process.cwd(),'/dist'),
    publicPath : '/static/',
    libraryTarget : 'umd',
    library : 'webpack'
  },
  module : {
    loaders : [
    {
      test : /\.jsx?$/,
      loader : 'babel-loader',
      query : {
        presets : ['es2015','react','stage-1']
      },
      exclude : /node_modules/
    },
    {
      test : /\.less$/,
      loaders : ['style-loader','css-loader','less-loader']
    },
    {
      test : /\.json/,
      loader: 'json-loader!strip-json-comments'
    },
    {
      test:/.(png)|(jpg)$/, 
      loader: "url-loader?limit=50000"
    }]
  },
  plugins : [
      new webpack.ProgressPlugin((percentage, msg) => {
        const stream = process.stderr;
        if (stream.isTTY && percentage < 0.71) {
          stream.cursorTo(0);
          stream.write(`📦   ${msg}`);
          stream.clearLine(1);
        }
      })
  ]
}