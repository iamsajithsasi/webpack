### weback: npm install webpack webpack-cli --save-dev

### babel : npm install -D babel-loader @babel/core @babel/preset-env webpack

### node_env: npm install -g win-node-env

### auto prefix css
1. Using autoprefixer -> Update webpack with below
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
2. Browser list fall back
    ```
    {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
    },
    ```
    1. Create postcss.config.js
    ```
        module.exports = {
            plugins: ["postcss-preset-env"],
        };
    ```
    2. Create .browserslistrc
    ```
        last 2 versions
        > 0.5%
        IE 10
    ```
