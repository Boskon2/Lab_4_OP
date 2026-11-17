'use strict';

const sum = (...args) => {
  let r = 0;
  let i = 0;
  if (!args.length) return 0;
  do {
    r += args[i];
    i++;
  } while (i < args.length);
  return r;
};

module.exports = { sum };
