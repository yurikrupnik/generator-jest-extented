const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    node: {
        __dirname: false,
        __filename: true,
    },
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
        library: 'generator-jest-extended',
        libraryTarget: 'umd'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: ['babel-loader', 'eslint-loader'],
            }
        ]
    }
};
