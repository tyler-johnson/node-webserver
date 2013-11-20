'use strict';

var string = {
  endsWith: function (haystack, needle) {
    return haystack.indexOf(needle, haystack.length - needle.length) !== -1;
  },

  startsWith: function (haystack, needle) {
    return haystack.slice(0, needle.length) === needle;
  }
};

module.exports = string;
