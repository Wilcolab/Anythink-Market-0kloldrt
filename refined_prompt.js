/**
 * Converts a string to camelCase format.
 * Handles various input formats including spaces, underscores, dashes, and uppercase input.
 * 
 * The function performs the following transformations:
 * - Splits camelCase words by inserting spaces between lowercase and uppercase letter boundaries.
 * - Normalizes all separators (spaces, underscores, dashes) to a single space.
 * - Converts the entire string to lowercase.
 * - Capitalizes the first letter of each word (except the first word) and removes spaces.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * toCamelCase('first name');      // 'firstName'
 * toCamelCase('user_id');         // 'userId'
 * toCamelCase('SCREEN_NAME');     // 'screenName'
 * toCamelCase('mobile-number');   // 'mobileNumber'
 */

/**
 * Converts a string to dot.case format.
 * Handles various input formats including spaces, underscores, dashes, and camelCase.
 * 
 * The function performs the following transformations:
 * - Splits camelCase words by inserting dots between lowercase and uppercase letter boundaries.
 * - Replaces all separators (spaces, underscores, dashes) with dots.
 * - Collapses multiple consecutive dots into a single dot.
 * - Converts the entire string to lowercase.
 * - Removes leading and trailing dots.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The dot.case formatted string.
 *
 * @example
 * toDotCase('first name');      // 'first.name'
 * toDotCase('user_id');         // 'user.id'
 * toDotCase('SCREEN_NAME');     // 'screen.name'
 * toDotCase('mobile-number');   // 'mobile.number'
 */
// Use this file to implement a robust camelCase function using a refined prompt.

// Converts a string to camelCase, handling spaces, underscores, dashes, and uppercase input.
function toCamelCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Split camelCase words
    .replace(/[_\-\s]+/g, " ") // Normalize all separators to space
    .toLowerCase()
    .replace(/ (.)/g, (match, group1) => group1.toUpperCase());
}

// Converts a string to dot.case format, handling spaces, underscores, dashes, and camelCase.
function toDotCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1.$2") // Split camelCase words
    .replace(/[_\-\s]+/g, ".") // Replace separators with dot
    .replace(/\.+/g, ".") // Collapse multiple dots
    .toLowerCase()
    .replace(/^\.|\.$/g, ""); // Remove leading/trailing dots
}

// Example usage:
// console.log(toCamelCase('first name'));      // firstName
// console.log(toCamelCase('user_id'));        // userId
// console.log(toCamelCase('SCREEN_NAME'));    // screenName
// console.log(toCamelCase('mobile-number'));  // mobileNumber

// console.log(toDotCase('first name'));      // first.name
// console.log(toDotCase('user_id'));        // user.id
// console.log(toDotCase('SCREEN_NAME'));    // screen.name
// console.log(toDotCase('mobile-number'));  // mobile.number
