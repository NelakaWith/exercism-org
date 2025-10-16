// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded === 0) return 0;
  let wedges = 0;
  let limesCut = 0;
  const limeWedges = {
    small: 6,
    medium: 8,
    large: 10,
  };
  while (wedges < wedgesNeeded && limesCut < limes.length) {
    const size = /** @type {'small'|'medium'|'large'} */ (limes[limesCut]);
    wedges += limeWedges[size] || 0;
    limesCut++;
  }
  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time = timeLeft;
  let i = 0;
  while (time > 0 && i < orders.length) {
    time -= timeToMixJuice(orders[i]);
    i++;
  }
  return orders.slice(i);
}
