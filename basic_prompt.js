// This file is for basic prompt-related JavaScript functions.
/**
 * Converts a string to camelCase.
 * Example: toCamelCase('hello world') returns 'helloWorld'
 * @param {string} str - The string to convert.
 * @returns {string} The camelCase version of the input string.
 */
function toCamelCase(str) {
    return str
        .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^(.)/, (m) => m.toLowerCase());
}