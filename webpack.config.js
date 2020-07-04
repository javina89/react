const HTMLWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

module.exports = {
    mode: 'development',
    entry: join(__dirname, './src/app.js'),
    output: {
        path: join(__dirname, 'build'),
        filename: 'app.bundles.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: join(__dirname, './src/index.html')
        })
    ]
}