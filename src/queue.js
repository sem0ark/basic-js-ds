const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.tail = new ListNode(0);
    this.head = this.tail;
  }

  getUnderlyingList() {
    return this.tail.next;
  }

  enqueue(value) {
    this.head.next = new ListNode(value);
    this.head = this.head.next;
  }

  dequeue() {
    const v = this.tail.next.value;
    this.tail.next = this.tail.next.next;
    return v;
  }
}

module.exports = {
  Queue
};
