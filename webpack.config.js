module.exports = {
    entry: {
        main: "./client/index.tsx"
    },
    output: {
        publicPath: "/js/",
        path: __dirname + "/public/js/",
        filename: "bundle.js"
    },

    // Enable sourcemaps for debugging webpack"s output.
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },

            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};