!function(){function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequireabb0;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequireabb0=o),o.register("eWrZJ",(function(r,t){e(r.exports,"fetchBreeds",(function(){return o})),e(r.exports,"fetchCatByBreed",(function(){return i}));var n="live_5bw3BxNA9WpKzB9hOqnhzpYg7lLInJuSkrwVbgEOYBDOXtq4PG9T5120vuhVnpxP";function o(){return fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":n}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to fetch breeds")})).catch((function(e){console.error(e)}))}function i(e){var r="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(e);return fetch(r,{headers:{"x-api-key":n}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to fetch cat by breed")})).catch((function(e){console.error(e)}))}})),o("eWrZJ")}();
//# sourceMappingURL=index.30d7e060.js.map
