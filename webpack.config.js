const HtmlWebpackPlugin = require( "html-webpack-plugin");

const { getThemeVariables } = require('antd/dist/theme');
const path = require("path");
// webpack.config.js
module.exports = {
    mode: "development",
    entry: ['./src/index.js' ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },

            {
            test: /\.less$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader', // translates CSS into CommonJS
            }, {
                loader: 'less-loader', // compiles Less to CSS
                options: {
                    lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly

                        javascriptEnabled: true,
                    },
                },
            }],
        }],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js',
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: "body"
        }),
    ],
    devServer: {
        hot: true,
        disableHostCheck: true,
        port: 8080,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "public"),
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 500
        },
        stats: {
            children: false,
            chunks: false,
            modules: false,
        },
    },
};
