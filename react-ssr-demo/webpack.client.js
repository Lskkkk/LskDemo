const path = require('path');

module.exports = {
    entry: './src/app/page.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'client.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            }
        ]
    }
};