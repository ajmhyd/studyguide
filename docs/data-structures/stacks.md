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

- `push()` Adds and item to the top of the stack `O(1)`

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
}
```

#### length()

```js
length() {
  return this.stack.length;
}
```

#### push()

```js
push(item) {
  return this.stack.push(item);
}
```

#### pop()

```js
pop() {
  return this.stack.pop();
}
```

#### peek()

```js
peek() {
  return this.stack[this.length - 1];
}
```

#### isEmpty()

```js
isEmpty() {
  return this.length === 0;
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
}
