// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let string1 = "";
  let string2 = "";
  let i = 0;
  let j = 0;
  while (i < array1.length) {
    string1 += String(array1[i]);
    i++;
  }
  while (j < array2.length) {
    string2 += String(array2[j]);
    j++;
  }
  return Number(string1) + Number(string2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const strValue = String(value);
  const reversedStrValue = strValue.split("").reverse().join("");
  return strValue === reversedStrValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  switch (true) {
    case input === null || input === undefined || input.trim() === "":
      return "Required field";
    case isNaN(Number(input)) || Number(input) === 0:
      return "Must be a number besides 0";
    default:
      return "";
  }
}
