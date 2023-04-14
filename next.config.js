const MangleCssClassPlugin = require("mangle-css-class-webpack-plugin");

module.exports = {
  i18n: {
    locales: ["en", "pt-BR"],
    defaultLocale: "en",
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new MangleCssClassPlugin({
        classNameRegExp: "[cl]-[a-z][a-zA-Z0-9_]*",
        log: true,
      })
    );
    return config;
  },
};
