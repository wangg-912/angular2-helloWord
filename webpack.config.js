var webpack = require("webpack");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
    entry: "./main.ts",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.ts?$/, use: "ts-loader" }
        ]
    },
    resolve:{
        modules: [__dirname, 'node_modules' ],
        alias:{},
        extensions: ['*', '.ts', '.js' ]
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new OpenBrowserPlugin({
            url:"http://localhost:3000"
        })
    ]
};