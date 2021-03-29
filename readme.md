# weback: npm install webpack webpack-cli --save-dev

# babel : npm install -D babel-loader @babel/core @babel/preset-env webpack

# auto prefix css -> auto prefixer

```auto prefix css
    {
    test: /\.css$/i,
    // use: ["style-loader", "css-loader"],
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
        loader: "postcss-loader",
        options: {
            postcssOptions: {
            plugins: ["autoprefixer"],
            },
        },
        },
    ],
    },
```
