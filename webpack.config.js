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
        modulesDirectories: ['src', 'node_modules'],

        // todo: review this config
        // Replace modules with other modules or paths for compatibility or convenience
        alias: {
            'React': 'react/addons',
            'underscore': 'lodash'
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        // todo: review loaders list
        loaders: [
            {test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
            {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
            {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
        ]
    },

    devtool: 'eval-source-map'
};
