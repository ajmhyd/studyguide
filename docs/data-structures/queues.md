---
id: queues
title: Queues
sidebar_label: Queues
---

Queues are very similar to stacks however they use the “first-in-firstout” `FIFO`

## Pros

- Similar to linked lists and typically used in breadth-first searches for trees

- May be used to implement cache

## Cons

- More difficult to update when adding and removing items than stack because items are added to one side of the structure and removed from the other side

## Methods

- `enqueue(item)` Add an item to the back of the queue `O(1)`

- `dequeue()` Remove the first item from the queue `O(1)`

- `peek()` Return the item at the front of the queue but _does not remove it_ `O(1)`

- `isEmpty()` Returns true if queue is empty

- `length()` Returns the length of the queue

---

## Code

### Array Implementation

```js
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  length() {
    return this.queue.length;
  }
}
```

### Linked List Implementation

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.fist) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (isEmpty()) return null;
    return this.first.value;
  }

  length() {
    return this.size
  }
}
```

---

## Sample Questions

- Implement a Queue class from scratch with an existing bug, the bug is that it cannot take more than 5 elements.

- Implement a Queue using two stacks. You may only use the standard `push()`, `pop()`, and `peek()` operations traditionally available to stacks. You do not need to implement the stack yourself _i.e. an array can be used to simulate a stack_
