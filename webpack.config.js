"use strict";

var path = require('path'), join = path.join.bind(path, __dirname);
var AUTOPREFIXER_LOADER = 'autoprefixer-loader?{browsers:[' +
    '"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
    '"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}';

var isPrepublish = process.env['npm_lifecycle_event'] === 'prepublish';

var isProduction = process.env['NODE_ENV'] === 'production';

var config = {
    devtool: (isPrepublish ?  '#source-map' : "#eval"),
    devServer: {
        noInfo: true,
        hot: true,
        inline: true,
        contentBase: join('public'),
        publicPath: '/',
        port: 8082
    },
    resolve: {
        extensions: ['', '.jsx', '.js'],
        alias: {
            'fbjs': join('node_modules/fbjs'),
            'react': join('node_modules/react'),
            'Subschema': join('node_modules/subschema/dist/subschema-noreact.js')
        }
    },
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        //noParse:[/subschema-noreact\.js/],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                //do this to prevent babel fromt tanslating everything.
                loader: 'babel',
                include: [
                    join('src'),
                    join('public')
                ]
            },
            {test: /\.(png|jpe?g|mpe?g[34]?|gif)$/, loader: 'url-loader?limit=100000'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: 'style!css!' + AUTOPREFIXER_LOADER
            },
            {
                test: /\.less$/,
                loader: 'style!css!less!' + AUTOPREFIXER_LOADER
            }]

    },
    externals: (isPrepublish ? [{
        'react': true,
        'Subschema':true
    }] : null)
};

module.exports = config;