const path = require('path')

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        index: './index.js',
    },

    module: {
        rules: [
            {
                test: /\.(eot|jpg|png|svg|ttf|woff2?)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.(html)$/,
                use: [
                    'file-loader?name=[name].[ext]',
                    'extract-loader',
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            removeComments: false,
                            collapseWhitespace: false
                        },
                    },
                ],
            },
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    "sass-loader",
                ],
            },
        ],
    },

    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] },
        }),
        new MiniCssExtractPlugin({
            chunkFilename: '[id].css',
            filename: '[name].css',
        }),
    ],
}