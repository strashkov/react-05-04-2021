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

    resolve: {
        modules: [`${__dirname}/src`, 'node_modules'],
        extensions: ['.js', '.jsx'],
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
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            {
                                "loose": true
                            }
                        ]
                    ]

                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
        ],

        // export: {
        //     devServer: {
        //         port: 8080,
        //         historyApiFallback: {
        //             index: 'index.html'
        //         }
        //      },
          
        // }
    },
 
 
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './src/index.html')
        })
    ]
}