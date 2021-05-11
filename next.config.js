const webpack = require("webpack");

const isProd = (process.env.NODE_ENV || "production") === "production";

const assetPrefix = isProd ? "/memes" : "";

module.exports = {
  assetPrefix: assetPrefix,
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.ASSET_PREFIX": JSON.stringify(assetPrefix),
      })
    );

    return config;
  },
  images: {
    domains: [
      "www.louiechristie.com",
      "img.youtube.com",
      "www.sinz.org",
      "embedwistia-a.akamaihd.net",
      "i.imgflip.com",
      "ichef.bbci.co.uk",
    ],
  },
};
