const { NotFound } = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = (name = {}) => {
  return async context => {
    throw new NotFound('Page not found', {url: '/' + context.path});
  };
};
