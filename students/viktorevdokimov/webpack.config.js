const { resolve } = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: './index.jsx',
    }, 
    context: resolve(__dirname, "src"),
    output: {
        path: resolve(__dirname, "build"),
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: resolve(__dirname, "src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                  presets: ['@babel/env', '@babel/react'],
                }
            },
        ],
    },
 
 
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './src/index.html')
        })
    ]
}