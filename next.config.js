require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? ".env" : ".env.local",
});

const withCSS = require("@zeit/next-css");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const nextConfig = {
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
};

const withCss = withCSS({
  webpack(config, options) {
    config.optimization.minimizer = [];
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
  ...nextConfig,
});

module.exports = withCss;
