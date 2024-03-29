const webpack = require("webpack");

const isProd = (process.env.NODE_ENV || "production") === "production";

const assetPrefix = isProd ? "/memes" : "";

module.exports = {
  output: "export",
  assetPrefix: assetPrefix,
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.ASSET_PREFIX": JSON.stringify(assetPrefix),
      })
    );

    return config;
  },
  trailingSlash: true,
};
