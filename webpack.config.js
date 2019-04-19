const path = require('path')

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'

    return {
        context: path.resolve(__dirname, 'src'),

        mode: isProduction ? 'production' : 'development',

        entry: {
            index: './index.js',
        },

        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg)$/,
                    include: [
                        path.resolve(__dirname, 'src')
                    ],
                    use: [
                        isProduction ?
                            'file-loader?name=[path][name].[contenthash:8].[ext]' :
                            'file-loader?name=[path][name].[ext]'
                    ],
                },
                {
                    test: /\.(eot|svg|ttf|woff2?)$/,
                    include: [
                        path.resolve(__dirname, 'node_modules')
                    ],
                    use: [
                        isProduction ?
                            'file-loader?name=assets/webfonts/[name].[contenthash:8].[ext]' :
                            'file-loader?name=assets/webfonts/[name].[ext]'
                    ],
                },
                {
                    test: /\.(html)$/,
                    use: [
                        'file-loader?name=[name].[ext]',
                        'extract-loader',
                        'html-loader?interpolate',
                    ],
                },
                {
                    test: /\.(c|sa|sc)ss$/,
                    use: [
                        isProduction ?
                            'file-loader?name=[name].[contenthash:8].css' :
                            'file-loader?name=[name].css',
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
            new BrowserSyncPlugin({
                host: 'localhost',
                server: { baseDir: ['dist'] },
            })
        ],
    }
}