const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.[tj]sx"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules = config.module.rules.map((rule) => {
      if (
        String(rule.test) ===
        String(
          /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
        )
      ) {
        console.log("HERERADWDW");
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        };
      }

      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    console.log(config.module.rules);

    return config;
  },
};
