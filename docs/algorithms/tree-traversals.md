---
id: tree-traversals
title: Tree Traversals
sidebar_label: Tree Traversals
---

Three was to traverse a tree:

- In-Order

- Pre-Order

- Post-Order

## In-Order Traversal

Visit the current node in the order it would naturally fall **left child, current node, right child**

## Pre-Order Traversal

Visit the current node before visiting the child nodes **current node, left child, right child**

## Post-Order Traversal

Visit the current node after visiting the child nodes **left child, right child, current node**

## Code 

```js
const BINARY_TREE_TRAVERSALS = {
  IN_ORDER: (node, visitFunction) => {
    if (node !== null) {
      BINARY_TREE_TRAVERSALS.IN_ORDER(node.leftChild, visitFunction);
      visitFunction(node);
      BINARY_TREE_TRAVERSALS.IN_ORDER(node.rightChild, visitFunction);
    }
  },
  PRE_ORDER: (node, visitFunction) => {
    if (node !== null) {
      visitFunction(node);
      BINARY_TREE_TRAVERSALS.PRE_ORDER(node.leftChild, visitFunction);
      BINARY_TREE_TRAVERSALS.PRE_ORDER(node.rightChild, visitFunction);
    }
  },
  POST_ORDER: (node, visitFunction) => {
    if (node !== null) {
      BINARY_TREE_TRAVERSALS.POST_ORDER(node.leftChild, visitFunction);
      BINARY_TREE_TRAVERSALS.POST_ORDER(node.rightChild, visitFunction);
      visitFunction(node);
    }
  }
};
```
