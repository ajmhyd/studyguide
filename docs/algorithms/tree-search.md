---
id: tree-search
title: Tree Search
sidebar_label: Tree Search
---

There are two algorithms for searching a tree for a node:

- Depth-first search `DFS`

- Breadth-first search `BFS`

## Depth-First Search (DFS)

In depth-first search we travel as far down each branch _starting with the left_ as possible before moving on to the right branch

### DFS Code

```js
function DFS(graph, startValue) {
  let startNode = graph.getNode(startValue);
  let visitedNodesHash = graph.nodes.reduce((accumulator, currentNode) => {
    accumulator[currentNode.value] = false;
    return accumulator;
  }, {});
  /*
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false
    }
  */
 function exploreNode(node) {
   if (visitedNodesHash[node.value]) return;

   console.log(`${node.value} => `);
   visitedNodesHash[node.value] = true;
   node.edges.forEach(edge => exploreNode(edge));
 }

 exploreNode(startNode);
}
```

## Breadth-First Search (BFS)

In Breadth-first search we explore all nodes on the same tree level before moving to a deeper level

### BFS Code

```js
function BFS(graph, startValue) {
  let startNode = graph.getNode(startValue);
  let visitedNodesHash = graph.nodes.reduce((accumulator, currentNode) => {
    accumulator[currentNode.value] = false;
  }, {});
   /*
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false
    }
  */
 const queue = new Queue();
 queue.enqueue(startNode);
 while (!queue.isEmpty()) {
   let currentNode = queue.dequeue();
   if (!visitedNodesHash[currentNode.value]) {
     console.log(`${currentNode.value} => `);
     visitedNodesHash[currentNode.value] = true;
   }

   currentNode.edges.forEach(node => {
     if (!visitedNodesHash[node.value]) {
       queue.enqueue(node);
     }
   });
 }
}
