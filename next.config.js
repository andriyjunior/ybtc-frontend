const path = require('path');
const { i18n } = require('./next-i18next.config.js');

module.exports = {
  reactStrictMode: true,
  i18n,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
};
