module.exports = {
    entry: {
        main: "./client/index.ts"
    },
    output: {
        publicPath: "/js/",
        path: __dirname + "/public/js/",
        filename: "bundle.js"
    },

    // Enable sourcemaps for debugging webpack"s output.
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".vue"]
    },

    module: {
        rules: [
            { test: /\.vue$/, loader: "vue-loader", },
            { test: /\.ts$/, loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] } },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};