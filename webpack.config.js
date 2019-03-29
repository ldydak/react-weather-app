const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader'
              }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CopyWebpackPlugin([
            {from:'src/img',to:'img'} 
        ]), 
    ]
}

module.exports = config;
