const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: "/dist/",
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    },
    devServer: {
        port: 3300,
        publicPath: "http://localhost:3300/",
        hotOnly: true
    },
    plugins: [new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'index.html')})]
};