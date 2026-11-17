'use strict';

const ages = (persons) => {
  const result = {};
  for (const name in persons) {
    const person = persons[name];
    result[name] = person.died - person.born;
  }
  return result;
};
  // should return {
  //   lenin: 54,
  //   mao: 83,
  //   gandhi: 79,
  //   hirohito: 88,
  // }

module.exports = { ages };
