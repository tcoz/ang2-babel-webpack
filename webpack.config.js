var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'public', 'src','index.js'),
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'vendor.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /\.useable\.css$/,
                loader: "style!css"
            },
            {
                test: /\.useable\.css$/,
                loader: "style/useable!css"
            }
        ]
    }
}