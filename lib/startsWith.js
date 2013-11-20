'use strict';

var startsWith = function (haystack, needle) {
  return haystack.slice(0, needle.length) === needle;
};

module.exports = startsWith;
