const path = require('path')

module.exports = {
 entry: './app/assets/scripts/App.js',
 output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
 },
 devServer: {
  port: 5000,
 },

 mode: 'development',
 watch: true
}