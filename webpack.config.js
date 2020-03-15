const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),

    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },

    devtool: 'inline-source-map',

    entry: {
        index: './index.js',
    },

    module: {
        rules: [
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[contenthash:8].[ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff2?)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/webfonts/[name].[contenthash:8].[ext]'
                }
            },
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    'file-loader?name=[name].[contenthash:8].css',
                    'extract-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },

    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}