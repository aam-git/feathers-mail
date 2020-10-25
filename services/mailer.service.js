// Initializes the `users` service on path `/users`
const { Mailer } = require('../class/mailer.class');
const hooks = require('../hooks/mailer.hooks');

module.exports = function (app) {

  if (typeof app.get('feathers-mail') !== 'undefined') {

    // Initialize our service with any options it requires
    app.use('/_mailer', new Mailer(app));

    // Get our initialized service so that we can register hooks
    const service = app.service('_mailer');

    service.hooks(hooks);

  }

};
