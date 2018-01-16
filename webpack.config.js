var path = require('path');
module.exports = {
    entry: [path.resolve(__dirname, 'src/index.js')],
    target: 'web',
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: '/node_modules',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
