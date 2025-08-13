// This file is for few-shot prompt-related JavaScript functions.

// Converts a string to camelCase
function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (match, chr) => (chr ? chr.toUpperCase() : ""))
    .replace(/^(.)/, (match, chr) => chr.toLowerCase());
}

// Example usage:
// console.log(toCamelCase('first name'));      // firstName
// console.log(toCamelCase('user_id'));        // userId
// console.log(toCamelCase('SCREEN_NAME'));    // screenName
// console.log(toCamelCase('mobile-number'));  // mobileNumber
