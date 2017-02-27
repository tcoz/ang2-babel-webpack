var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, 'public', 'src','index.js'),
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: '[name].bundle.js',
        devtoolLineToLine: true,
        sourceMapFilename: '[name].bundle.map'
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