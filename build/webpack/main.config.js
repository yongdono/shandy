/*!
 * Created by j on 2019-02-06.
 */

process.env.BABEL_ENV = 'main'

const path = require('path')
const webpack = require('webpack')

const nodeExternals = require('webpack-node-externals');
const { dependencies } = require('../../package.json')

let mainConfig = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    target: 'electron-main',
    entry: {
        main: [path.join(__dirname, '../../src/main/main.js')]
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '../../dist/main')
    },
    externals: [
        //nodeExternals()
        ...Object.keys(dependencies || {})
    ],
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        // formatter: require('eslint-friendly-formatter')
                    }
                }
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.node$/,
                use: 'node-loader'
            }
        ]
    },
    node: false,
    resolve: {
        extensions: ['.js', '.json', '.node']
    }
}


if (process.env.NODE_ENV !== 'production') {
    mainConfig.plugins.push(
        new webpack.DefinePlugin({
            '__static': `"${path.join(__dirname, '../../static').replace(/\\/g, '\\\\')}"`
        })
    )
}

if (process.env.NODE_ENV === 'production') {
    mainConfig.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    )
}


module.exports = mainConfig