const webpack = require('webpack');
const path = require('path');

const config = {
    entry: path.resolve(__dirname, 'public/src/app.js'),
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            }
        ]
    }
};

module.exports = config;