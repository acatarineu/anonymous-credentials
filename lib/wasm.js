'use strict';
const { initModule } = require('./util');

let initPromise;
module.exports = () => {
  if (!initPromise) {
    initPromise = initModule(require('../dist/group-sign-wasm'));
  }
  return initPromise;
};
