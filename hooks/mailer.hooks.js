const { iff, isProvider } = require('feathers-hooks-common');
const isExternal = require('../helpers/isExternal');

module.exports = {
  before: {
    all:    [
      iff(
        isProvider('external'),
        isExternal()
      ),
    ],
  },
  after: {
    all:    [],
    find:   [],
    get:    [],
    create: [],
    update: [],
    patch:  [],
    remove: []
  },
};
