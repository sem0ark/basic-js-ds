const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const temp = new ListNode(0);
  temp.next = l;
  d(temp, k);
  return temp.next;
}

function d(l, k) {
  while (l.next && l.next.value === k) l.next = l.next.next;
  if (l.next) d(l.next, k);
}

module.exports = {
  removeKFromList
};
