const MangleCssClassPlugin = require("mangle-css-class-webpack-plugin");

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
    ],
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
  async headers() {
    return [
      {
        source: "/.well-known/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};
