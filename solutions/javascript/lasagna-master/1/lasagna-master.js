/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * @param {number} timer
 */
export function cookingStatus(timer) {
  if (timer === null || timer === undefined) {
    return "You forgot to set the timer.";
  } else if (timer === 0) {
    return "Lasagna is done.";
  } else {
    return "Not done, please wait.";
  }
}

/**
 * @param {string[]} layers
 * @param {number} [avgTime=2]
 */
export function preparationTime(layers, avgTime = 2) {
  return layers.length * avgTime;
}

/**
 * @param {string[]} layers
 * @returns {{noodles: number, sauce: number}}
 */
export function quantities(layers) {
  return layers.reduce(
    (accumulator, currentElement) => {
      if (currentElement === "noodles") {
        accumulator.noodles += 50;
      } else if (currentElement === "sauce") {
        accumulator.sauce += 0.2;
      }
      return accumulator;
    },
    { noodles: 0, sauce: 0 },
  );
}

/**
 * @param {string[]} findsList
 * @param {string[]} myList
 */
export function addSecretIngredient(findsList, myList) {
  myList.push(findsList[findsList.length - 1]);
}

/**
 * Scales a recipe based on the number of desired portions.
 * @param {Object.<string, number>} recipe - The baseline recipe for 2 portions.
 * @param {number} portions - The desired number of portions.
 * @returns {Object.<string, number>} The scaled recipe copy.
 */
export function scaleRecipe(recipe, portions) {
  const factor = portions / 2;
  /** @type {Record<string, number>} */
  const scaledRecipe = {};
  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * factor;
  }

  return scaledRecipe;
}
