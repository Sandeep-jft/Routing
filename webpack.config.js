const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
    mode:'development',
    entry:'./src/js/index.js',
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
        assetModuleFilename: 'images/[hash][ext][query]'

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            // title:'react router app',
            // filename:'main.html',
            // minify:false //true in case of production
        }),
        new MiniCssExtractPlugin()
    ],

    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-react","@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                  // [style-loader](/loaders/style-loader)
                  { loader: MiniCssExtractPlugin.loader },
                  // [css-loader](/loaders/css-loader)
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  { loader: MiniCssExtractPlugin.loader },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  },
                  { loader: 'sass-loader' }
                ]
            }
        ]
    },
    devServer:{
        static:{
            directory:path.join(__dirname, 'dist')
        },
        compress:true,
        port:9000,
        open:true,
    }
}