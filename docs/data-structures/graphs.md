---
id: graphs
title: Graphs
sidebar_label: Graphs
---

- A graph is a data structure composed of a collection of nodes and
edges.

- Graphs are a non-linear data structure _as opposed to a linked list, stack, or queue_

- nodes may also be referred to as vertices

- Graphs are used to solve many real-world problems and can be used
to represent networks

- Two types of graphs:

  - Directed graphs

  - Undirected graphs

#### Directed Graphs

- A directed graph contains edges which function similarly to a one-way
street; _they have a direction_

#### Undirected Graphs

- An undirected graph, in contrast, contains edges which flow bidirectionally, _like a two-way street_

## Code

```js
class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Graph {
  constructor(undirected = false) {
    this.undirected = undirected;
    this.nodes = [];
  }

  addNode(value) {
    this.nodes.push(new Node(value));
  }

  removeNode(value) {
    this.nodes = this.nodes.filter(node => node.value !== value);
    this.nodes.forEach(node => {
      node.edges = node.edges.filter(edge => edge.value !== value);
    });
  }

  getNode(value) {
    return this.nodes.find(node => node.value === value);
  }

  addEdge(value1, value2) {
    const node1 = this.getNode(value1);
    const node2 = this.getNode(value2);

    node1.edges.push(node2);

    if (this.undirected) {
      node2.edges.push(node1);
    }
    return `An edge between ${node1.value} and ${node2.value} was added`;
}
