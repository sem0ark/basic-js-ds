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
    if (!this.main) this.main = new Node(data);

    let cur = this.root();
    while (cur) {
      if (data <= cur.data) {
        if (cur.left) cur = cur.left;
        else return cur.left = new Node(data);
      } else {
        if (cur.right) cur = cur.right;
        else return cur.right = new Node(data);
      }
    }
  }

  has(data) {
    if (!this.main) return false;

    let cur = this.root();
    while (cur) {
      if (cur.data === data) return true;
      if (cur.data < data) cur = cur.left;
      else cur = cur.right;
    }

    return false;
  }

  find(data) {
    let cur = this.root();
    while (cur) {
      if (cur.data === data) return cur;
      if (cur.data < data) cur = cur.left;
      else cur = cur.right;
    }

    return null;
  }

  remove(data) {
    this.main = this.removeRec(this.main, data);
  }

  removeRec(node, data) {
    if (!node) return node;

    if (node.data > data) {
      node.left = this.removeRec(node.left, data);
      return node;
    }

    if (node.data < data) {
      node.right = this.removeRec(node.right, data);
      return node;
    }

    if (!node.left) return node.right;
    if (!node.right) return node.left;

    let parent = node;
    let cur = node.right;
    while (cur.left) {
      parent = cur;
      cur = cur.left;
    }

    if (parent !== node) {
      parent.left = cur.right;
      parent.right = cur.right;
    } else {
    }

    node.data = cur.data;
    return node;
  }

  min() {
    let res = null;
    let cur = this.root();

    while (cur) {
      res = cur.data;
      cur = cur.left;
    }

    return res;
  }

  max() {
    let res = null;
    let cur = this.root();

    while (cur) {
      res = cur.data;
      cur = cur.right;
    }

    return res;
  }
}

module.exports = {
  BinarySearchTree
};