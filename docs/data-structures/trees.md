---
id: trees
title: Trees
sidebar_label: Trees
---

A tree is a data structure where a node can have zero or more children

The top-most node is called the root

The DOM, or document object model, is a tree data structure

A node without children is called a leaf node

The height of a tree is the distance between the farthest leaf node and the root node

## Binary Trees

Binary trees are a special type of tree in which each node can only have a maximum of two children: a left child and a right child

### Full Binary Trees

A full binary tree is a binary tree in which every node has exactly zero or two children _but never one_

```java
   O
  / \
 O   O
    / \
   O   O
  / \
 O   O
 ```

### Complete Binary Trees

A complete binary tree is a binary tree in which all levels except the last one are full with nodes

```java
          O
        /   \
       O     O
      / \   / \
     O   O O   O
    /\   /\
   O  O O  O
 ```

### Perfect Binary Tree

A perfect binary tree is a binary tree in which all levels, including the last level, are full of nodes

```java
          O
        /   \
       O     O
      / \   / \
     O   O O   O
 ```

### Binary Search Tree

A binary search tree is a special type of binary tree where the values of every node to the left are less than its value and the values of every node to the right are greater than its value

```java
    10
   /  \
  7    12
 / \     \
3   9     14
```

## Code

```js
class Node {
  constructor(value) {
    this.value= value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addChild(value) {
    if(this.root === null) {
      this.root = new Node(value);
      return;
    } else {
      let currentNode = this.root;
      let added = false;

      while(!added && currentNode) {
        if (value === currentNode.value) {
          return "Duplicates cannot be added";
        }

        if (value < currentNode.value) {
          if (currentNode.leftChild === null) {
            currentNode.leftChild = new Node(value);
            added = true;
          } else {
            currentNode = currentNode.leftChild;
          }
        } else if (value > currentNode.value) {
          if (currentNode.rightChild === null) {
            currentNode.rightChild = new Node(Value)
            added = true;
          } else {
            currentNode = currentNode.rightChild;
          }
        }
      }
    }
  }

  removeChild(value) {
    let currentNode = this.root;
    let found = false;
    let nodeToRemove;
    let parentNode = null;

    while(!found) {
      if (currentNode === null || current.value === null) {
        return "The node was not found";
      }
      if (value === currentNode.value) {
        nodeToRemove = currentNode;
        found = true;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.leftChild;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.rightChild;
      }
    }

    const nodeToRemoveIsParentsLeftChild = parentNode.leftChild === nodeToRemove;
    // If nodeToRemove is a leaf node
    if (nodeToRemove.leftChild === null && nodeToRemove.rightChild === null) {
      if (nodeToRemoveIsParentsLeftChild) {
        parentNode.leftChild = null;
      } else {
        parentNode.rightChild = null;
      }
    } else if (nodeToRemove.leftChild !== null && nodeToRemove.rightChild === null) {
      // Only has a left child
      if (nodeToRemoveIsParentLeftChild) {
        parentNode.leftChild = nodeToRemove.leftChild;
      } else {
        parentNode.rightChild = nodeToRemove.leftChild;
      }
    } else if (nodeToRemove.rightChild !== null && nodeToRemove.leftChild === null) {
      // Only has a right child
      if (nodeToRemoveIsParentsLeftChild) {
        parentNode.leftChild = nodeToRemove.rightChild;
      } else {
        parentNode.rightChild = nodeToRemove.rightChild;
      }
    } else {
      // Has two children
      const rightSubTree = nodeToRemove.rightChild;
      const leftSubTree = nodeToRemove.leftChild;
      // set parent node's respective child to the right subtree
      if (nodeToRemoveIsParentsLeftChild) {
        parentNode.leftChild = rightSubTree;
      } else {
        ParentNode.rightChild = rightSubTree;
      }

      // Find the lowest free space on the left side of the right subtree and add the leftSubTree
      let currentLeftNode = rightSubTree;
      let currentLeftParent;
      let foundSpace = false;
      while (!foundSpace) {
        if (currentLeftNode === null) {
          foundSpace = true;
        } else {
          currentLeftParent = currentLeftNode;
          currentLeftNode = currentLeftNode.leftChild;
        }
      }
      currentLeftParent.leftChild = leftSubTree;
      return "The node was successfully deleted";
    }
  }
}
