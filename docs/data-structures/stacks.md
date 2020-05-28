---
id: stacks
title: Stacks
sidebar_label: Stacks
---

A stack is "last in first out" `LIFO`.

## Pros

- Constant-time `O(1)` adding and removing of the top

## Cons

- `O(n)` time to access item

## Methods

- `pop()` Removes the top item from the stack `O(1)`

- `push(item)` Adds and item to the top of the stack `O(1)`

- `peek()` Returns the item at the top of the stack but _does not remove it_ `O(1)`

- `isEmpty()` Returns true if the stack is empty

- `length()` Returns the number of items in the stack

---

## Code

### Array Implementation

```js
class Stack {
  constructor() {
    this.stack = [];
  }

  length() {
    return this.stack.length;
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
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

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
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
    if (this.isEmpty()) return null;
    return this.last.value;
  }
}
```

---

## Sample Questions

- Write an algorithm to determine if all of the delimiters in an expression are matched and closed.

  - E.g. `{ac[bb]}`, `[dklf(df(kl))d]{}` and `{[[[]]]}` are matched. But `{3234[fd]}` and `{df][d}]}` are note.

- Sort a stack in ascending order using an additional stack.
