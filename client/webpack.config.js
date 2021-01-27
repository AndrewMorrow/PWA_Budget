const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: {
        app: ".././public/index.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [
        new WebpackPwaManifest({
            fingerprints: false,
            name: "Budget app",
            short_name: "Budget",
            description:
                "An application that allows you to keep track of your expenses online or offline.",
            background_color: "#01579b",
            theme_color: "#ffffff",
            "theme-color": "#ffffff",
            start_url: "/",
            icons: [
                {
                    src: path.resolve("./assets/icons/icon-512x512.png"),
                    sizes: [192, 512],
                    destination: path.join("assets", "icons"),
                },
            ],
        }),
    ],
};

module.exports = config;
