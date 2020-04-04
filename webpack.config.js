const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

    const isProduction = env === 'production'

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }, {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                    //use: [
                    //    {
                    //        loader: 'css-loader',
                    //        options: {
                    //            sourceMap: true
                    //        }
                    //    }, {
                    //        loader: 'sass-loader',
                    //        options: {
                    //            sourceMap: true
                    //        }
                    //    }
                    //]
                }, {
                    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            }
                        }, {
                            loader: 'file-loader',
                        }
                    ]
                }]
        },
        plugins: [
            //new MiniCssExtractPlugin({
            //    filename: 'styles.css',
            //}),
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true, // Added to provide index.html for any not matched route
            publicPath: '/dist/'
        },
    };
}