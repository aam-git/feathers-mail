const mailer = require('./services/mailer.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(mailer);
};
