const mailer = require('./services/mailer.service');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {

  if (typeof app.service('_mailer') === 'undefined') {
    app.configure(mailer);
  }

};
