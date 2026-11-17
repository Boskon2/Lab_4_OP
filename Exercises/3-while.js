'use strict';

const sum = (...args) => {
  let r = 0;
  let i = 0;
  while (i < args.length) {
    r += args[i];
    i++;
  }
  return r;
};

module.exports = { sum };
