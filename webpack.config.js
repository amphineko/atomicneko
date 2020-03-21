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
                test: /\.(eot|jpg|png|svg|ttf|woff2?)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[contenthash:8].[ext]'
                }
            },
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    'file-loader?name=[name].[contenthash:8].css',
                    'extract-loader',
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            engine: 'postcss',
                            sourceMap: true
                        }
                    }
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