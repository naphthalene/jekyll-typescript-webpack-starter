module.exports = env => require(`./config/webpack/webpack.${env || 'dev'}.js`);
