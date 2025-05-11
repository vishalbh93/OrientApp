const path = require("path");

module.exports = {
    devtool: "source-map", 
    mode: "development",
    entry: {
        index: "./Scripts/src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "../../wwwroot/js"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                use: {
                    loader: "babel-loader",
                },
                test: /\.js$/,
                exclude: /node-modules/
            }
        ]
    }
}