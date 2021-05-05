const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: "./src/index.tsx", // точка входа, о которой говорилось ранее.
    mode: "development",
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/, // сопоставляет файлы .js, .ts, и .tsx 
                loader: "babel-loader", // использует для указанных типов файлов загрузчик babel-loader (ts-loader не требуется).
                exclude: /node_modules/, 
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"], 
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3003,
        publicPath: "http://localhost:3003/dist/",
        historyApiFallback: true,
        hotOnly: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: "eval-source-map",
}