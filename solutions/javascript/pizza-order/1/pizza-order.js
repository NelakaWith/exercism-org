/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  // base price based on pizza type
  let base = 0;
  switch (pizza) {
    case "Margherita":
      base = 7;
      break;
    case "Formaggio":
      base = 10;
      break;
    case "Caprese":
      base = 9;
      break;
    default:
      base = 0;
  }

  /**
   * Recursively compute extras price
   * @param {Extra[]} list
   * @returns {number}
   */
  function extrasPrice(list) {
    if (!list || list.length === 0) return 0;
    const [head, ...tail] = list;
    const cost = head === "ExtraSauce" ? 1 : head === "ExtraToppings" ? 2 : 0;
    return cost + extrasPrice(tail);
  }

  return base + extrasPrice(extras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  /**
   * Recursively sum order prices using divide-and-conquer over index ranges.
   * This keeps recursion depth to O(log n) for large lists.
   * @param {PizzaOrder[]} list
   * @returns {number}
   */
  function sumOrders(list) {
    if (!list || list.length === 0) return 0;

    /**
     * Sum elements in list in [start, end) using recursion.
     * @param {number} start
     * @param {number} end
     * @returns {number}
     */
    function sumRange(start, end) {
      if (start >= end) return 0;
      if (start + 1 === end) {
        const item = list[start];
        return pizzaPrice(item.pizza, ...item.extras);
      }
      const mid = Math.floor((start + end) / 2);
      return sumRange(start, mid) + sumRange(mid, end);
    }

    return sumRange(0, list.length);
  }

  return sumOrders(pizzaOrders);
}
