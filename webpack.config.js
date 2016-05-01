'use strict';

var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',

    output: {
        path: __dirname + '/assets',
        filename: 'build.js',
        publicPath: '/assets/'
    },

    resolve: {
        root: __dirname,
        modulesDirectories: ['src', 'node_modules']
    },

    module: {
        // todo: review loaders list
        loaders: [
            {test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.less$/, loaders: ['style', 'css', 'less']},
            {test: /\.json/, loaders: ['json']}
        ]
    },

    devtool: 'eval-source-map'
};
