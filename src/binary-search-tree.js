const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.main = null;
  }

  root() {
    return this.main;
  }

  add(data) {
    if (!this.main) return this.main = new Node(data);

    let cur = this.root();
    while (cur) {
      if (data < cur.data) {
        if (cur.left) cur = cur.left;
        else return cur.left = new Node(data);
      } else {
        if (cur.right) cur = cur.right;
        else return cur.right = new Node(data);
      }
    }
  }

  find(data) {
    let cur = this.root();
    while (cur) {
      if (cur.data === data) return cur;
      if (cur.data > data) cur = cur.left;
      else cur = cur.right;
    }

    return null;
  }

  has(data) {
    return !!this.find(data);
  }

  remove(data) {
    this.removeRec(this.main, data);
  }

  /**
   * 
   * @param {Node} node 
   * @param {Number} data 
   * @returns 
   */
  removeRec(node, data) {
    if (!node) return null;

    if (data < node.data)
      node.left = this.removeRec(node.left, data);
    else if (data > node.data)
      node.right = this.removeRec(node.right, data);
    else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let tmp = this.minNode(node.right);
      node.data = tmp.data;
      node.right = this.removeRec(node.right, tmp.data);
    }

    return node;
  }

  minNode(start) {
    let cur = start;
    while (cur && cur.left) cur = cur.left;
    return cur;
  }

  maxNode(start) {
    let cur = start;
    while (cur && cur.right) cur = cur.right;
    return cur;
  }

  min() {
    return this.minNode(this.root())?.data;
  }

  max() {
    return this.maxNode(this.root())?.data;
  }
}

module.exports = {
  BinarySearchTree
};