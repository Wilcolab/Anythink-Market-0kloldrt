// This file is for chain prompt-related JavaScript functions.
/**
 * Converts a given string to kebab-case.
 *
 * @param {string} input - The string to convert.
 * @returns {string} The kebab-case version of the input string.
 * @throws {TypeError} If the input is not a string or is an empty string.
 *
 * Example:
 *   toKebabCase('Hello World') // returns 'hello-world'
 *   toKebabCase('fooBarBaz')   // returns 'foo-bar-baz'
 */
function toKebabCase(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new TypeError('Input must be a non-empty string');
    }
    return input
        .replace(/([a-z])([A-Z])/g, '$1-$2')      // fooBar -> foo-Bar
        .replace(/[\s_]+/g, '-')                  // spaces/underscores -> -
        .replace(/[^a-zA-Z0-9-]/g, '')            // remove non-alphanumerics except -
        .toLowerCase();
}